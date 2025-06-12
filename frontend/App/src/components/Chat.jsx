import { useEffect, useRef, useState } from 'react'
export const Chat = () => {
  const ws = useRef(null)
  const [messages, setMessages] = useState([]) // store chat messages (both user and bot messages)
  const [input, setInput] = useState('') //Stores the current text being typed by the user.

  useEffect(() => {
  // WebSocket server's port

    ws.current.onmessage = (event) => {
      const { type, data } = JSON.parse(event.data)

      if (type === 'bot-response') {
        setMessages((preview) => [
          ...preview, {
            from: 'bot',
            text: data
          }
        ])
      }

      return () => {
        ws.current.close() // closes the WebSocket connection to avoid memory leaks or broken connections.
      }
    }
  }, [])

  const sendMessage = async (e) => {
    e.preventDefault
    const response = await fetch('http://localhost:5000/api/assistance', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (input.trim()) {
      ws.current.send(input)
      setMessages((prev) => [...prev, {
        from: 'user',
        text: input
      }])
      setInput('')
    }

    const data = await response.json()
    setMessages((prev) => [...prev, {
      from: 'bot',
      text: data
    }])
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100" >
      <div className="flex flex-col w-full max-w-2xl h-[90vh] bg-white shadow-md rounded-lg overflow-hidden">

        {/* Header */}
        <div className="bg-blue-800 text-white p-4 text-xl font-bold">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"></path>
          </svg>
          Personal Assistant
        </div>

        

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[75%] px-4 py-2 rounded-lg text-white ${msg.from === 'user'
                ? 'bg-blue-600 self-start'
                : 'bg-gray-700 self-end'
                }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t flex items-center bg-white">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div >
  )
}