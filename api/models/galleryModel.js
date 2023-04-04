const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Image upload error'],
  },
})
const Gallery = mongoose.model('galleries', gallerySchema)

module.exports = Gallery
