const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");

const userModel = require("../models/user.model");
const aiService = require("../services/ai.service");
const messageModel = require("../models/message.model");
const { createMemory, queryMemory } = require("../services/vector.service");

function initSocketServer(httpServer) {

    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:5173",
            allowedHeaders: ["Content-Type", "Authorization"],
            credentials: true
        }
    });

    //  AUTH MIDDLEWARE
    io.use(async (socket, next) => {

        const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

        //  FIX: add return
        if (!cookies.token) {
            return next(new Error("Authentication error: No token provided"));
        }

        try {
            const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);

            const user = await userModel.findById(decoded.id);

            // FIX: check user exists
            if (!user) {
                return next(new Error("Authentication error: User not found"));
            }

            socket.user = user;
            next();

        } catch (err) {
            return next(new Error("Authentication error: Invalid token"));
        }

    });

    io.on("connection", (socket) => {

        socket.on("ai-message", async (messagePayload) => {

            try {
                /* messagePayload = { chat:chatId,content:message text } */

                //  Save message + vector
                const [message, vectors] = await Promise.all([
                    messageModel.create({
                        chat: messagePayload.chat,
                        user: socket.user._id,
                        content: messagePayload.content,
                        role: "user"
                    }),
                    aiService.generateVector(messagePayload.content),
                ]);

                //  Store memory
                await createMemory({
                    vectors,
                    messageId: message._id,
                    metadata: {
                        chat: messagePayload.chat,
                        user: socket.user._id,
                        text: messagePayload.content
                    }
                });

                // Get memory + chat history
                const [memory, chatHistory] = await Promise.all([

                    //  Cross-chat memory (same as your code)
                    queryMemory({
                        queryVector: vectors,
                        limit: 3,
                        metadata: {
                            user: socket.user._id
                        }
                    }),

                    //  FIX: cleaner sorting (no reverse needed)
                    messageModel.find({
                        chat: messagePayload.chat
                    }).sort({ createdAt: 1 }).limit(20).lean()
                ]);

                //  Format chat history
                const stm = chatHistory.map(item => ({
                    role: item.role === "model" ? "model" : "user", // ✅ FIX safer
                    parts: [{ text: item.content }]
                }));

                //  Format memory
                const ltm = [
                    {
                        role: "user",
                        parts: [{
                            text: `
these are some previous messages from the chat, use them to generate a response

${memory.map(item => item.metadata.text).join("\n")}
                            `
                        }]
                    }
                ];

                //  Generate response
                const response = await aiService.generateResponse([ ...ltm, ...stm ]);

                //  Send response
                socket.emit("ai-response", {
                    content: response,
                    chat: messagePayload.chat
                });

                //  Save AI response
                const [responseMessage, responseVectors] = await Promise.all([
                    messageModel.create({
                        chat: messagePayload.chat,
                        user: socket.user._id,
                        content: response,
                        role: "model"
                    }),
                    aiService.generateVector(response)
                ]);

                // 🔹 Store AI memory
                await createMemory({
                    vectors: responseVectors,
                    messageId: responseMessage._id,
                    metadata: {
                        chat: messagePayload.chat,
                        user: socket.user._id,
                        text: response
                    }
                });

            } catch (err) {
                //  Added error handling
                console.error("AI ERROR:", err.message);

                socket.emit("ai-response", {
                    content: "⚠️ Error or rate limit reached. Try again.",
                    chat: messagePayload.chat
                });
            }

        });

    });
}

module.exports = initSocketServer;