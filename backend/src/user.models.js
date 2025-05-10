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

  fullname: {
    type: String,
    required: true,
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

export const hashingPassword = (password) => {
  const hashing = bcryptjs.hash(10, password);
  return hashing;
};

export const validatePassword = (password, hashedPassword) => {
  const validation = bcryptjs.compare(password, hashedPassword);
  return validation;
};


const JWT_SECRET_KEY = "YAEIRPOE34NKDNFOJPOJ34";
const options = {
  expiresIn: "20min",
}

export const generateToken = async (data) => {
  const token = await jwt.sign(data, "JWT_SECRET_KEY", options);

  if (!token) throw new Error("Token is not generated");

  return token;
}

export const verifyToken  = async(token) => {
    const token = jwt.verify(token, JWT_SECRET_KEY, options)
    if(!token ) throw new Error("Token is not valid")
    return token
}

export const User = mongoose.model("User", userModel);
