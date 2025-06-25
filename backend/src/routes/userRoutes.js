import dotenv from "dotenv";
import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  toogleFollow
} from "../controllers/userController.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";


dotenv.config();
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);
router.patch("/follow/:channelId", verifyJWT, toogleFollow)

export { router };
