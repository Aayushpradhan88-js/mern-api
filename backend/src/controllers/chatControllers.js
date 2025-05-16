import app from "../app.js";
import http from 'http'
import socketIo from 'socket.io'

const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', (socket)=> {

  socket.on('sendMessage', async(message) => {
    
  })
})