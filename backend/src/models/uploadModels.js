import mongoose, {Schema} from 'mongoose';

const imageModel = new Schema({
    resourceType: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    }
})

export const Image = mongoose.model('Image', imageModel)

/*
FUTURE CODE
const uploadSchema = new Schema ({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type:String,
        required: [true, 'A Title is required'],
        trim: true

    },
    description: {
                type: String,
                trim: true

    },
    contentType:{
        type:String,
                required:true,
        enum: ['video', 'file', 'image'],
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    mimeType: {
        type: String // e.g., 'image/jpeg', 'video/mp4', 'application/pdf'
    },

    //---- ViewsCounter (applies to all content) -----
    views: {
        type: Number,
        default: 0 
    },
    isPublished: {
        type:Boolean,
        default: true
    },

    //  --- Type-Specific Metadata ---
    meta: {
        //For videos
        duration: {
            type: Number
        },

        //Thumbnail for visual contnet
        thumbnailUrl: {
            type: String
        },

        //For images & videos only
         width: { type: Number },
        height: { type: Number },
    },
}, 
{timestamps: true})

export const Upload = mongoose.model('Upload', uploadSchema );
*/