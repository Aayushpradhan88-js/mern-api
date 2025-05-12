import express from 'express'
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js'

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/details", getUsers)
router.get("/details/:id", getUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

export { router }