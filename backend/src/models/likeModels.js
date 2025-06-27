import mongoose from "mongoose";
const {Schema} = mongoose;

const likeModel = new mongoose(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        content: {
            type: Schema.Types.ObjectId,
            ref: "Upload",
            required: true
        }
    }
);


export const Like = mongoose.model("Like", likeModel);