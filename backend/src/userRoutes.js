import express from 'express'
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  // loginUser,j
  loginUsers
} from './userController.js'

const router = express.Router()

router.post("/register-user", createUser)
router.post("/login-user", loginUsers)
router.get("/details", getUsers)
router.get("/details/:id", getUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)


export { router }