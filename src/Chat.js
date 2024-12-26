import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";

const Chat = () => {
  const { id } = useParams(); // Artist ID
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages((prev) => [...prev, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Chat with Artist {id}</h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === "user" ? "user-message" : "artist-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
