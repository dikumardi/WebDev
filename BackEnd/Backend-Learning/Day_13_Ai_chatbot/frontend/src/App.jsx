import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";

const App = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Make sure socket exists before emitting
    if (socket) {
      socket.emit("ai-message", input);
    }

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    // Initialize socket
    const socketInstance = io("http://localhost:3000");
    

    setSocket(socketInstance);

    // Listen for messages from the server
   socketInstance.on('ai-message-response', (response) => {

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        timestamp: new Date().toLocaleTimeString(),
        sender: 'bot'
      }

      setMessages(prevMessages => [...prevMessages, botMessage])
      
    })

    // Clean up socket on component unmount
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        <div className="chat-header">Chat</div>

        <div className="chat-body">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-row ${msg.sender === "user" ? "right" : "left"}`}
            >
              <div className={`message ${msg.sender}`}>
                {msg.text}
                <div className="timestamp">{msg.timestamp}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
};

export default App;