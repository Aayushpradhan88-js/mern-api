import { cloudinary } from "../utils/cloudinary.js"
import { Upload } from "../models/uploadModels.js";
import { promises as fsPromises } from "fs";
import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";

export const uploadFileContent = async (req, res) => {
    const { title, description, contentType } = req.body;

    if (!title || !description) {
        throw new ApiError(400, "Title and description is required");
    }

    if (!req.files || !req.files.photo || !req.files.photo.tempFilePath) {
        console.log("No file uploaded or tempFilePath not found");

        return res.status(400).json({
            success: false,
            message: "No file uploaded. Please ensure you are sending a file with the field name 'photo'."
        })
    }

    const file = req.files.photo;
    const tempFilePath = file.tempFilePath;

    try {

        const contentTypeToResourceTypeMap = {
            'image': 'image',
            'video': 'video',
            'file': 'raw' //For documents, pdf, txt, files 
        };

        const cloudinaryResourceType = contentTypeToResourceTypeMap[contentType?.toLowerCase()];

        if (!cloudinaryResourceType) throw new ApiError(400, 'In-Valid Content-Type');

        //UPLOAD FILE ON CLOUDINARY
        const cloudinaryResult = await cloudinary.uploader.upload(tempFilePath, {
            resource_type: cloudinaryResourceType,
            // format: format
        });

        console.log(`FILE TYPE ${contentType} IS SUCCESSFULLY UPLOADED ON CLOUDINARY`, cloudinaryResult);

        //TODO: UNDERSTAND THE CODE LINE
        const thumbnailUrl = (contentType === 'image' || contentType === 'video') ? cloudinaryResult.secure_url.replace(/\.(mp4|mov|avi)$/i, '.jpg') : cloudinaryResult.secure_url;

        //SAVING UPLOAD DATA TO MONGODB
        const newUpload = new Upload({
            title,
            description: description || '',
            contentType,
            thumbnail: thumbnailUrl,
            url: cloudinaryResult.secure_url,
            public_id: cloudinaryResult.public_id,
            resourceType: cloudinaryResult.resource_type,
            format: cloudinaryResult.format
        })

        const savedUpload = await newUpload.save();
        console.log(`${contentType.charAt(0).toUpperCase() + contentType.slice(1)} metadata saved to MongoDB:`, savedUpload);
  
 
        return res.status(201).json({
            success: true,
            message: `${contentType.charAt(0).toUpperCase() + contentType.slice(1)} uploaded Successfully!`,
            cloudinaryData: {
                url: cloudinaryResult.secure_url,
                public_id: cloudinaryResult.public_id,
                resource_type: cloudinaryResult.resource_type,
                format: cloudinaryResult.format
            },
            mongoData: savedUpload
        });

    } catch (error) {
        console.error(`Error during ${contentType || 'file'} upload process:`, error);
        return res.status(500).json({
            success: false,
            message: `Server error during ${contentType || 'file'} upload.`,
            error: error.message
        })
    }
    finally {
        // Clean up the temporary file
        if (tempFilePath) { // Check if tempFilePath was defined
            try {
                await fsPromises.unlink(tempFilePath); // Use fs.promises for async/await
                console.log("Temporary file deleted:", tempFilePath);
            } catch (unlinkError) {
                console.error("Error deleting temporary file:", tempFilePath, unlinkError);
            }
        }
    }

}

//hey hey for this time i don't care about frontend and error handling i just want to get the image data, i want that when i get the data it should be stored in the cloudinary and i can see it and i want to see the user data should be stored in mongodb that error handling part complex code which i don't understant i don't want that thing but you make my code very much complex and i can't understant should i shift to chatgpt because you're creating more problems and write unnecessary code and error handling




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
            metaData.thumbnailUrl = cloudinaryUploadResult.thumbnailUrl;k
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