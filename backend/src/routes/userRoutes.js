import dotenv from "dotenv";
import express from "express";

import {
  registerUser,
  loginUser,
  toogleFollow
} from "../controllers/userController.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";


dotenv.config();
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/follow/:channelId", verifyJWT, toogleFollow)

//FUTURE
/*
router.get("/search", voiceSearch);
// router.post("/assistance", assistanceController);

router.delete("/:id", deleteUser);
router.get("/details", getUsers);
router.get("/details/:id", getUser);
*/

export { router };
