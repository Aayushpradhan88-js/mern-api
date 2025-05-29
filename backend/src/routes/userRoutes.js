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

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const router = express.Router();

router.get("/register",registerUser);

router.post("/login", loginUser);
router.post("/upload", upload.single("coverImage"), (req, res) => {
  if(!req.file) {
    throw new ApiError(400, "File is not uploaded")
  }

  console.log("File uploaded: ", req.file)

  return (
    res.status(200)
    .json(
      {
        message: "File Uploaded Successfully",
        Filename: req.Filename,
        Filepath: req.Filepath
      }
    )
  )
});
router.get("/search", voiceSearch);
// router.get("/ai-response", aiController);
// router.post("/assistance", assistanceController);

router.delete("/:id", deleteUser);
router.get("/details", getUsers);
router.get("/details/:id", getUser);

export { router };
