import mongoose, { Schema } from "mongoose";

const chatModel = new Schema(
  {
    userId: String,
    message: String,
    isAI: {
      type: Boolean,
      default: false,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

export const Chat = mongoose.model("Chat", chatModel);
