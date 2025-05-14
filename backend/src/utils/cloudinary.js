import { v2 as cloudinary } from "cloudinary"
import { Console } from "console"

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

  const uploadResult = await cloudinary.uploader
    .upload(
      "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
      {
        public_id: "shoes",
      }
    )
    .catch((error) => {
      console.log(error)
    })
  Console.log(uploadResult)
})()

export { cloudinary }
