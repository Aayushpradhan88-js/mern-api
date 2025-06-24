
import express from "express";  

import { 
    uploadFileContent,
    getAllUploads,
    contentId,   
    viewIncrement
} from "../controllers/uploadController.js";

const router = express.Router();

router.post("/upload-file", uploadFileContent);
router.get("/all-uploads", getAllUploads);

//-----TODO: VERIFY JWT-----//
router.get("/single-upload/:id", contentId);
router.patch("/single-upload/:id/views", viewIncrement);

export{router};