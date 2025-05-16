import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "json-web-token";
import cookie from "cookie";

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

    avatar: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
    },
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
userModel.methods.validatePassword = async (password, hashedPassword) => {
  try {
    const validation = await bcrypt.compare(password, hashedPassword);
    return validation;
  } catch (error) {
    return res.send(404).json({
      message: "Incorrect Password",
      error,
    });
  }
};

//token generation
userModel.methods.generateAccessToken = async (user) => {
  try {
    const accessToken = jwt.sign(
      {
        _id: user._id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
    return accessToken;
  } catch (error) {
    return res.send(501).json({
      message: "Token is not created",
      error: error.message,
    });
  }
};

//Refresh Token
userModel.methods.generateRefreshToken = async () => {
  try {
    const refreshToken = jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET_KEY,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
    return refreshToken;
  } catch (error) {
    return res.send(501).json({
      message: "Refreshtoken is not created",
      error: error.message,
    });
  }
};

//token verification
userModel.methods.tokenVerification = async (validtoken) => {
  try {
    const validToken = jwt.verify(validtoken, process.env.JWT_SECRET_KEY);
    return validToken;
  } catch (error) {
    return res.send(408).json({
      message: "Token is not valid, check you're token",
      error,
    });
  }
};

export const User = mongoose.model("User", userModel);
