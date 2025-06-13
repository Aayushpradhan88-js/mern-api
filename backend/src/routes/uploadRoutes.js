
import express from "express";  

// import { upload } from "../middlewares/multerMiddleware.js";

import { uploadFileContent,getAllUploads } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/upload-file", uploadFileContent);
router.get("/all-uploads", getAllUploads);

export{router};