import multer from 'multer'


const storage = multer.diskStorage({
    // TODO
    // destination: function(req, file, cb) {
    //     cb(null, './upload')
    // },
        filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage: storage })