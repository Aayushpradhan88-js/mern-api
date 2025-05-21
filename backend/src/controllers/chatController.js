import { app } from "../app.js"
import { WebSocket } from "ws"
import axios from "axios"
import http from "http"

const server = http.createServer(app)
const wss = new WebSocket.server({ server })

wss.on("connection", (ws) => {
  console.log("Client connected")

  ws.on("message", async (message) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v2/user/get-response",
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
