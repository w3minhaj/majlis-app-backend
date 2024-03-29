const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Image upload error'],
    },
  },
  { timestamps: true }
)
const Gallery = mongoose.model('galleries', gallerySchema)

module.exports = Gallery
