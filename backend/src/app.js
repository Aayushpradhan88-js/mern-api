import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { router } from "./userRoutes.js";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "16kb" }));

app.use("/api/v2/users", router);
function notFound(req, res) {
  res.status(404).json({ message: "Route not found!!" });
}
// app.use(("*", notFound));

export { app };
