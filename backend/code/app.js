import cors from "cors";
import express from "express";
import { router } from "./routes/userRoutes.js";

// import path from "path";

const app = express();

app.use(cors()  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "16kb" }));

app.use("/api/user", router);

export { app };