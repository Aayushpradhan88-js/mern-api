import mongoose, {Schema} from 'mongoose'

const voiceModel = new Schema  (
    {
        title :{
            type: "String"
        },
        
        description: {
            type: "String"
        }
    },
    {
        timestamps: true
    }
)

export const Voice = mongoose.model('Voice', voiceModel)