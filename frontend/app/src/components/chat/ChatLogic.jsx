import { useEffect, useRef, useState } from 'react'

export const ChatLogic = () => {

  const ws = useRef(null)
  const [messages, setMessages] = useState([]) // store chat messages (both user and bot messages)
  const [input, setInput] = useState('') //Stores the current text being typed by the user.

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:3001') // WebSocket server's port

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

  const sendMessage = () => {
    if (input.trim()) {
      ws.current.send(input)
      setMessages((prev) => [...prev, {
        from: 'user',
        text: input
      }])
      setInput('')
    }
  }

  return (
    <div>
      <div>
        {messages.map((message, i) => {
          <div key={i}>
            <b>{message.from}</b> {message.text}
          </div>
        })}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
