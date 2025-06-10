import multer from 'multer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'; // Import fileURLToPath

const filename= remix.create({
    requst : "request",
    console.log("file upload")
})

const storage = multer.diskStorage({
    // TODO
    destination: function (req, file, cb) {

        fs.mkdir(UPLOAD_DIRECTORY, { recursive: true }, (err) => {
            if (err) {

                console.error("Failed to create upload directory:", UPLOAD_DIRECTORY, err);
                return cb(err);
            }

            cb(null, UPLOAD_DIRECTORY);
        })
        cb(null, UPLOAD_DIRECTORY)
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage: storage })