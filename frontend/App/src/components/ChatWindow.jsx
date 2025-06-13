import React, { useEffect, useState } from 'react'

export const ChatWindow = () => {
    const[messages, setMessages] = useState([
        {
            id:1,
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
        chatEndRef.current?.scrollIntoView( {behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    //Handling sending a message(user or suggestion)
    const handleSendMessage = (text) => {
        if(text.trim() === ' ') return;

        const newMessage = { id:Date.now(), text, sender: 'user'};
        setMessages(prev => [...prev, newMessage]);
        setInputValue('');

        setTimeout(() => {
            const botResponse = {id:Data.now() + 1, text: `I've revieved you're message "${text}". A representative`, sender: 'bot'};
            setMessages(prev => [...prev, botResponse])
        }, 1500);
    }
  return (
    <div>
      <div>
        <h3 className='font-bold text-gray-800'></h3>
      </div>
    </div>
  )
}