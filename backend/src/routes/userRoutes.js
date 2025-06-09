import dotenv from "dotenv";
import express from "express";

import {
  registerUser,
  loginUser
} from "../controllers/userController.js";
import { uploadContent, getAllUploads } from "../controllers/uploadController.js";
import { upload } from "../middlewares/multerMiddleware.js";

dotenv.config();
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/upload", upload.single("file"), uploadContent);
router.get("/all", getAllUploads);


//FUTURE
/*
router.get("/search", voiceSearch);
// router.get("/ai-response", aiController);
// router.post("/assistance", assistanceController);

router.delete("/:id", deleteUser);
router.get("/details", getUsers);
router.get("/details/:id", getUser);
*/

export { router };
