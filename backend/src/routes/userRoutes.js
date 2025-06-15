import dotenv from "dotenv";
import express from "express";

import {
  registerUser,
  loginUser
} from "../controllers/userController.js";
import { aiController } from "../controllers/aiController.js";

dotenv.config();
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/ai-response", aiController);

//FUTURE
/*
router.get("/search", voiceSearch);
// router.post("/assistance", assistanceController);

router.delete("/:id", deleteUser);
router.get("/details", getUsers);
router.get("/details/:id", getUser);
*/

export { router };
