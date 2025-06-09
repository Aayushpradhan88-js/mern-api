// import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { cloudinary } from "../utils/cloudinary.js"
import { Image } from "../models/uploadModels.js";

export const imageUpload = (req, res) => {

    cloudinary.uploader.upload(req.file.path, async (req, res, err, result) => {
        try {
            const { resourceType, format } = req.file;
            const image = awaitImage({ resourceType, format })
            await image.save()

            res.send({
                success: true,
                msg: "Image Uploaded Successfully",
                data: image
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                msg: "Error"
            })
        }
        
        if (err) {
            return res
                .status(500)
                .json(
                    {
                        success: false,
                        msg: "Error"
                    }
                )
        }

        res
            .status(200)
            .json(
                {
                    success: true,
                    msg: "Image Uploaded Succeessfully",
                    data: result
                }
            )
    })
}


/*
Future

import { Upload } from "../models/uploadModels.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
export const uploadContent = async (req, res) => {
    try {
        const { title, description, contentType, uploadedBy } = req.body;
        const file = req.file;

        if (!file) {
            console.log("File is not uploaded")
            return new ApiError(400, "File is not uploaded")
        }

        if (!title || !contentType) {
            return new ApiError(400, 'Title & ContentType is required');
        }

        //Determining Content based on user preferences
        let cloudinaryResourceType;
        if (contentType === 'video') {
            cloudinaryResourceType = 'video';
        } else if (contentType === 'image') {
            cloudinaryResourceType = 'image';
        } else if (contentType === 'file') {
            cloudinaryResourceType = 'raw' //For General Files
        } else {
            return new ApiError(400, 'Invalid content-type');
        };

        const cloudinaryUploadResult = await uploadOnCloudinary(file, cloudinaryResourceType);

        if (!cloudinaryUploadResult || !cloudinaryUploadResult.secure_url) {
            return new ApiError(500, 'Failed to upload file to cloudinary')
        }

        //META DATA BASED ON CONTENT TYPE
        let metaData = {};
        if (contentType === 'video') {
            metaData.duration = cloudinaryUploadResult.duration;
            metaData.thumbnailUrl = cloudinaryUploadResult.thumbnailUrl;
        } else if (contentType === 'image') {
            metaData.width = cloudinaryUploadResult.width;
            metaData.height = cloudinaryUploadResult.height;
            metaData.thumbnailUrl = cloudinaryUploadResult.secure_url;
        }

        //Saving Upload Data to MONGODB
        const newUpload = new Upload(
            {
                thumbnail: cloudinaryUploadResult.secure_url,
                title,
                description,
                contentType,
                uploadedBy: uploadedBy || null,
                memeType: file.mimeType,
                meta: metaData,
            }
        );

        await newUpload.save();

        return res
            .status(201)
            .json(
                {
                    success: true,
                    message: 'Content uploaded successfully',
                    upload: newUpload,
                    cloudinaryResult: {
                        secure_url: cloudinaryUploadResult.secure_url,
                        public_id: cloudinaryUploadResult.public_id,
                        resource_type: cloudinaryUploadResult.resource_type
                    }
                }
            )
    } catch (error) {
        console.error('Error during content upload:', error);
        res.status(500).json({ success: false, message: 'Server error during upload.' });
    }
}

export const getAllUploads = async (req, res) => {
    const uploads = await Upload.find().populate('uploadedBy', 'username email')
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                { uploads },
                "Uploads fetched successfully"
            )

        )
}
        */