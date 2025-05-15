import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import path from "path"

import { router } from "./routes/userRoutes.js"

const app = express()

//FRONTEND CONNECTION
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// )

// app.set("view engine", "ejs")
// app.set("views", path.resolve("./views"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "16kb" }))

app.use("/api/v2/user", router)
// app.get("/profile", (req, res) => {
//   return res.render("index")
// })


function notFound(req, res) {
  res.status(404).json({ message: "Route not found!!" })
}

export { app }
