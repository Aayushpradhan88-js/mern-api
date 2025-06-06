import dotenv from "dotenv";
dotenv.config();
import mongoose, { Schema } from "mongoose";

// import bcrypt from "bcrypt";
// import jwt from "json-web-token";

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
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userModel);