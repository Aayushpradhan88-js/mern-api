import { WebSocketServer } from "ws"
import axios from "axios"
import http from "http"

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('HTTP server is running');
})

const wss = new WebSocketServer({ server });

export const assistanceController = wss.on("connection", (ws) => {
  console.log("Client connected")

  ws.on("message", async (message) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v2/user/ai-response",
        { code: message.toString() }
      )

      ws.send(
        JSON.stringify({
          type: "bot-response",
          data: response.data,
        })
      )
    } catch (error) {
      ws.send(
        JSON.stringify({
          type: "error",
          data: "failed to respond the data",
        })
      )
    }
  })
  ws.on("close", () => {
    console.log("Client disconnected")
  })
})
