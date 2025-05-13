import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/temp");
  },

  filename: function (req, file, cb) {
    // if (!file || !file.originalname) {
    //   return cb(new Error("File or filename is missing"));
    // }
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({
  storage,
});
