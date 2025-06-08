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
  
  //FUTURE
  /*
  //hashing password
  userModel.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });

  //token generation
  */

export const User = mongoose.model("User", userModel);
