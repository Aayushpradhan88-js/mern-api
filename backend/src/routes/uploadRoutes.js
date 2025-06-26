
import express from "express";  

import { 
    uploadFileContent,
    getAllUploads,
    contentId,   
    viewIncrement
} from "../controllers/uploadController.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/upload-file",verifyJWT, uploadFileContent);
router.get("/all-uploads", getAllUploads);

//-----TODO: VERIFY JWT-----//
router.get("/single-upload/:id",verifyJWT, contentId);
router.patch("/single-upload/:id/views",verifyJWT, viewIncrement);

export{router};