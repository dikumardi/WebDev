require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/services/ai.service");
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
        origin: "http://localhost:5173", // Adjust 
    }
});
const chatHistory = [];

io.on("connection", (socket) => {
  console.log('A user is connected');
  
  socket.on("disconnect", () => {
    console.log("A user is disconnected");
  });
  /* ai-message */

  socket.on("ai-message", async (data) => {
    chatHistory.push({
      role: "user",
      parts: [{ text: String(data) }],
    });

    const response = await generateResponse(chatHistory);

    chatHistory.push({
      role: "model",
      parts: [{ text: String(response) }],
    });
    socket.emit("ai-message-response",  response );
  });
});

httpServer.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
