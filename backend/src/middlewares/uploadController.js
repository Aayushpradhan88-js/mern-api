import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, next) {
    cb(null, "./public/temp");
  },

  filename: function (req, file, cb) {
    if (!file || !file.originalname) {
      return cb(new Error("File or filename is missing"));
    }
    cb(null, file.originalname);
  },
})

export const upload = multer(
    {
        storage
    }
)