import { v2 as cloudinary } from "cloudinary";

import fs from 'fs'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (loaclFilePath) => {
  try {
    if(!loaclFilePath) return null

    const upload = await cloudinary.uploader.upload(loaclFilePath,
      {
        resource_type: "auto" //options: video, image, pdf (specific)
      }
    )
    console.log("File is uploaded successfully", upload.url)
    return upload
    
  } catch (error) {
    fs.unlinkSync(loaclFilePath) // remove the locally saved temporary file as the upload operation got failed
    return null
  }

};
export { uploadOnCloudinary };
