// import {app} from "../app.js";
// import http from "http";
// import {socketio} from "socket.io";
// import { Chat } from "../models/chatModels.js";

// const server = http.createServer(app);
// const io = socketio(server);

// io.on("connection", (socket) => {
//   socket.on("sendMessage", async (message) => {
//     const chat = new Chat({
//       userId: socket.handshake.auth.userId,
//       message,
//     });
//   });
// });
