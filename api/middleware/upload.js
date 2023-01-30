const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, file.fieldname + "_" + Date.now() + ext);
  },
});
uploads = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "application/pdf"
    ) {
      callback(null, true);
    } else {
      console.log("only jpeg and png");
      callback(null, false);
    }
  },
});

const multipleUpload = uploads.fields([
  { name: "image", maxCount: 1 },
  { name: "material", maxCount: 1 },
  { name: "gallery", maxCount: 1 },
  { name: "content", maxCount: 1 },
]);

module.exports = multipleUpload;
