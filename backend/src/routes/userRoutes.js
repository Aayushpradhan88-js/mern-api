import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { upload } from "../middlewares/uploadController.js";
import { voiceSearch } from "../controllers/voiceSearchController.js";

// import { chatController } from "../controllers/chatControllers.js";
import { aiController } from '../controllers/aiController.js'

const router = express.Router();

router.post(
  "/register",
  upload.fields([
    { 
      name: "avatar",
      maxCount: 1 
    },
    { 
      name: "coverImage", 
      maxCount: 1 
    },
  ]),
  registerUser
);

router.post("/login", loginUser);
router.post("/upload", upload.single("coverImage"), updateUser);
router.get("/search", voiceSearch)

// router.get("/chat", aiController)
router.get('/get-response', aiController)

router.delete("/:id", deleteUser);
router.get("/details", getUsers);
router.get("/details/:id", getUser);

export { router };