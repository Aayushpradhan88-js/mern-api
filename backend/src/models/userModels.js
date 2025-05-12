import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "json-web-token";
import cookie from "cookie";

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
  try {
    const hashing = await bcryptjs.hash(password, 10);
    return hashing;
  } catch (error) {
    return res.send(500).json({
      message: "Password is not hashed",
      error,
    });
  }
};

//comparing password
export const validatePassword = async (password, hashedPassword) => {
  try {
    const validation = await bcryptjs.compare(password, hashedPassword);
    return validation;
  } catch (error) {
    return res.send(404).json({
      message: "Incorrect Password",
      error,
    });
  }
};

//token generation
export const generateToken = async (tokengeneration) => {
  try {
    const token = jwt.sign({
      _id: this._id,
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    },
      tokengeneration,
      process.env.JWT_SECRET_KEY,
      {
        EXPIRESIN: process.env.expiresIn
      }
    );
    return token;
  } catch (error) {
    return res.send(501).json(
      {
       message: "Token is not generated",
       error
      }
    );
  }
};

//token verification
export const verifyToken = async (validtoken) => {
  try {
    const validToken = jwt.verify(validtoken, process.env.JWT_SECRET_KEY);
    return validToken;
  } catch (error) {
    return res
    .send(408)
    .json(
      {
        message: "Token is not valid, check you're token",
        error
      }
    )
  }
};

export const User = mongoose.model("User", userModel);
