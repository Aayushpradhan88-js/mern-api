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
router.get("/details", getUsers);
router.get("/details/:id", getUser);
router.post("/upload", upload.single("coverImage"), updateUser);
router.delete("/:id", deleteUser);

export { router };
