import { Upload } from "../models/uploadModels.js";
import { cloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


export const uploadOnCloudinary = async (fileBuffer, resourceType) => {
    try {
        if (!fileBuffer) return null;
        
        console.log("Cloudinary object:", cloudinary);
        console.log("Cloudinary uploader object:", cloudinary.uploader);


        const result = await cloudinary.uploder.upload(
            `data: ${fileBuffer.mimeType};base64.${fileBuffer.buffer.toString('base64')}`,
            {
                resource_Type: resourceType,
                folder: ''
            }
        );

        return result;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return null;

    }
};

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