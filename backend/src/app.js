import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import { router as userRoutes } from "./routes/userRoutes.js";
import {router as uploadRoutes} from "./routes/uploadRoutes.js";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "16kb" }));

//File upload
app.use(fileUpload({
    useTempFiles: true
}));

app.use("/api", userRoutes);
app.use("/upload", uploadRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Backend")
})

export { app }