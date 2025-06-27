
import express from "express";  

import { 
    uploadFileContent,
    getAllUploads,
    contentId,   
    viewIncrement,
    deleteContent,
    updateContent,
    myContent
} from "../controllers/uploadController.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/upload-file",verifyJWT, uploadFileContent);
router.get("/all-uploads", getAllUploads);
router.get("/single-upload/:id",verifyJWT, contentId);
router.patch("/single-upload/:id/views",verifyJWT, viewIncrement);

//-----FOR CONTENT OWNER ONLY-----//
router.patch("/update-content/:id",verifyJWT, updateContent);
router.delete("/delete-content/:id",verifyJWT, deleteContent);

router.get("/my-content", verifyJWT, myContent);

export{router};