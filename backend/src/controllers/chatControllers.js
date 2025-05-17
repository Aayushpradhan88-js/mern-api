import app from "../app.js";
import http from 'http'
import socketIo from 'socket.io'
import { Chat } from "../models/chatModels.js";

const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', (socket)=> {

  socket.on('sendMessage', async(message) => {
    const chat = new Chat(
        {
            userId: socket.handshake.auth.userId, message
        }
    )
  })
})