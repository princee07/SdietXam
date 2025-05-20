import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

const ChatWindow = ({ mentor, onClose }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "mentor", text: `Hello! I'm ${mentor.name}. How can I help you today?`, time: new Date() }
  ]);
  
  const chatContainerRef = useRef(null);
  
  useEffect(() => {
    // Scroll to the bottom whenever chat history updates
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);
  
  const sendMessage = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([
      ...chatHistory,
      { sender: "user", text: message, time: new Date() }
    ]);
    
    setMessage("");
    
    // Simulate mentor response after a short delay
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me explain...",
        "I'd be happy to help you with that.",
        "That's an interesting topic. In my experience...",
        "I'd recommend starting with the basics first.",
        "Feel free to ask me more specific questions about this topic."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setChatHistory(prevChat => [
        ...prevChat,
        { sender: "mentor", text: randomResponse, time: new Date() }
      ]);
    }, 1000);
  };
  
  // Format time for chat messages
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="fixed bottom-4 right-4 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={mentor.photo} 
            alt={mentor.name} 
            className="h-8 w-8 rounded-full mr-3 object-cover"
          />
          <div>
            <h3 className="text-white font-medium">{mentor.name}</h3>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
              <span className="text-xs text-blue-100">
                {mentor.students === 0 ? "Mentee" : "Mentor"} • Online now
              </span>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:bg-blue-700 rounded-full p-1"
        >
          <FaTimes />
        </button>
      </div>
      
      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        className="flex-1 p-4 overflow-y-auto bg-gray-50"
      >
        {chatHistory.map((msg, idx) => (
          <div 
            key={idx}
            className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                msg.sender === "user" 
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              <div className="text-sm">{msg.text}</div>
              <div 
                className={`text-xs mt-1 ${
                  msg.sender === "user" ? "text-blue-200" : "text-gray-500"
                }`}
              >
                {formatTime(msg.time)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Message Input */}
      <form onSubmit={sendMessage} className="border-t border-gray-200 p-3 flex">
        <input 
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg flex items-center justify-center transition-colors"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;