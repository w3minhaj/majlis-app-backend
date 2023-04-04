const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'))
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname)
    console.log('running')

    //TODO: remove originalname in filename, instead add a new field in model
    if (file.fieldname === 'material') {
      cb(
        null,
        file.fieldname + '_' + file.originalname + '_' + Date.now() + ext
      )
    } else {
      cb(null, file.fieldname + '_' + Date.now() + ext)
    }
  },
})
uploads = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'application/pdf'
    ) {
      callback(null, true)
    } else {
      console.log('only jpeg and png')
      callback(null, false)
    }
  },
})

const multipleUpload = uploads.fields([
  { name: 'material', maxCount: 1 },
  { name: 'gallery', maxCount: 1 },
  { name: 'content', maxCount: 1 },
  { name: 'image', maxCount: 1 },
])

module.exports = multipleUpload
