import express from 'express'
import multer from 'multer'
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js'
import { upload } from '../middlewares/uploadController.js'

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/details", getUsers)
router.get("/details/:id", getUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

//file upload
router.get("/profile", upload.single("file"), (req, res) => {
  console.log(req.body)
  console.log(req.file)
  // return res.redirect("/register")
})

export { router }