import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { upload } from "../middlewares/uploadMiddleware.js";
import { voiceSearch } from "../controllers/voiceSearchController.js";
// import { aiController } from "../controllers/aiController.js";
// import { assistanceController } from "../controllers/assistanceController.js";

const router = express.Router();

router.post("/register",registerUser);

router.post("/login", loginUser);
router.post("/upload", upload.single("coverImage"), upload);
router.get("/search", voiceSearch);
// router.get("/ai-response", aiController);
// router.post("/assistance", assistanceController);

router.delete("/:id", deleteUser);
router.get("/details", getUsers);
router.get("/details/:id", getUser);

export { router };
