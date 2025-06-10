
import express from "express";  

// import { uploadContent, getAllUploads } from "../controllers/uploadController.js";
// import { upload } from "../middlewares/multerMiddleware.js";
import { imageUpload } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/upload-image", imageUpload);
// router.get("/all", getAllUploads);

export{router};