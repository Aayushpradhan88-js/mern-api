import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "json-web-token";

const userModel = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    LowerCase: true,
  },

  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    LowerCase: true,
  },

  password: {
    type: String,
    required: true,
    kMaxLength: [6, "At least 6 symbols, letters, dots, numbers combination"],
  },
});

//hashing password
export const hashingPassword = async (password) => {
  const hashing = await bcryptjs.hash(password, 10);
  return hashing;
};

//comparing password
export const validatePassword = async (password, hashedPassword) => {
  const validation = await bcryptjs.compare(password, hashedPassword);
  return validation;
};

//JWT

//token generation
export const generateToken = async (tokengeneration) => {
  try {
    const token = jwt.sign(
      tokengeneration,
      process.env.JWT_SECRET_KEY,
      process.env.expiresIn
    );
    return token;
  } catch (error) {
    throw new Error("Token is not generated", error);
  }
};

//token verification
export const verifyToken = async (validtoken) => {
  try {
    const validToken = jwt.verify(validtoken, process.env.JWT_SECRET_KEY)
    return validToken;
  } catch (error) {
    throw new Error("Token is not valid, check you're token", error)
  }
};

export const User = mongoose.model("User", userModel);
