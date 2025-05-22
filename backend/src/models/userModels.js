import dotenv from "dotenv";
dotenv.config();
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "json-web-token";

const userModel = new Schema(
  {
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

    watchHistory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
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

//hashing password
userModel.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//comparing password
userModel.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//token generation

//AccessToken
userModel.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userModel.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userModel);
