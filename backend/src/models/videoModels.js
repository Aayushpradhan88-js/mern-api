import mongoose, { Schema } from "mongoose"

const videoModel = new Schema(
  {
    title: {
      type: "String",
      required: true,
    },

    thumbnail: {
      type: "Image",
      required: true,
    },

    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    
  },
  {
    timestamps: true,
  }
)

export const Video = mongoose.model("Video", videoModel)
