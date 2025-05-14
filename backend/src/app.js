// import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { router } from "./routes/userRoutes.js";
import path from "path";
const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// )

//ejs
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "16kb" }));

app.use("/api/v2/user", router);
app.get("/profile", (req, res) => {
  return res.render("index")
})


function notFound(req, res) {
  res.status(404).json({ message: "Route not found!!" });
}

export { app };
