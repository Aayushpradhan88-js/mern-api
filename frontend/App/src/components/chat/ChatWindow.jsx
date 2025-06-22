import React from 'react'
import { useEffect, useState, useRef } from 'react'

export const ChatWindow = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! How can i help you",
      sender: "bot"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);


  const suggestions = [
    "How to search to look other channels video"
  ];

  //Function to scroll automatically to new messages
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  //Handling sending a message(user or suggestion)
  const handleSendMessage = (text) => {
    if (text.trim() === ' ') return;

    const newMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    //Stimulating bot response
    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, text: `I've revieved you're message "${text}". A representative`, sender: 'bot' };
      setMessages(prev => [...prev, botResponse])
    }, 1500);
  }
  return (
    <>
      {/* HEADER */}
      <div className="bg-gray-50 p-4 rounded-t-xl flex justify-between items-center border-b border-gray-200">
        <div>
          <h3 className="font-bold text-gray-800">Personal Assistance</h3>
          <p className="text-sm text-gray-500">Chat with youre assistance </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5v4m0 0h4" /></svg>
          </button>
          <button onClick={closeChat} className="text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>

      {/* MESSAGE AREA */}
      <div>
        {messages.map((message) => (
          <div key={message.id} className={`${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'bg-green text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'
              }`}>
              {message.text}
            </div>
          </div>
        ))}

        {/* Render suggestion chips after the last bot message */}
        {messages[messages.length - 1].sender === 'bot' && (
          <div className="flex flex-col items-end mt-4">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(suggestion)}
                className="bg-white border border-gray-300 text-gray-700 rounded-full py-2 px-4 my-1 text-sm hover:bg-gray-100 transition-colors">
                {suggestion}
              </button>
            ))}
          </div>
        )
        }
        <div ref={chatEndRef}></div>
      </div>


      {/* INPUT AREA */}
      <div className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
        <div className='relative'>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
            placeholder='Type youre Message '
            className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white p-2.5 rounded-full hover:bg-green-700 transition-colors focus:outline-none"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>

    </>
  )
}