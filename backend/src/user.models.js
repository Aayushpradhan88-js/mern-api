import mongoose, { Schema } from "mongoose";

const userModel = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        LowerCase: true,
    },

    fullname: {
        type: String,
        required: true
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
        kMaxLength: [6, "At least 6 symbols, letters, dots, numbers combination"]
    }
})

export const User = mongoose.model("User", userModel)