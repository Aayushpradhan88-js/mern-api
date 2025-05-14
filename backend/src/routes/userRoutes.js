import express from 'express'
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
router.patch("/:id", upload.single("profileImage") , updateUser)
router.delete("/:id", deleteUser)

export { router }