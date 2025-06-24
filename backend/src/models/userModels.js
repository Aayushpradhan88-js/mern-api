import dotenv from "dotenv";
dotenv.config();
import mongoose, { Schema } from "mongoose";

import bcrypt from "bcrypt";
// import jwt from "json-web-token";

const userModel = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
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
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: [3 , "Password must be at least 6 characters long"],
    },

    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    following: [
      {
        type:Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    //FUTURE
    
    // watchHistory: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Video",
    // },
    /*
    avatar: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
    },
    */
  },
  {
    timestamps: true,
  }
);


//comparing password
userModel.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
  };

export const User = mongoose.model("User", userModel);
