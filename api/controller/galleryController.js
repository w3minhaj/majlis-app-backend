const app = require('./../app')
const Gallery = require('./../models/galleryModel')

const fs = require('fs')
const { promisify } = require('util')
const path = require('path')

const unlinkAsync = promisify(fs.unlink)

exports.getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find()
    res.status(200).json({
      status: 'success',
      results: Gallery.length,
      data: {
        gallery,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    })
  }
}

exports.createGallery = async (req, res) => {
  try {
    const newGallery = new Gallery({
      image: req.files.gallery[0].filename,
    })
    await newGallery.save()
    res.status(200).json({
      status: 'success',
      data: newGallery,
    })
  } catch (err) {
    //TODO: delete image uploaded if adding to db fails
    res.status(400).json({
      status: 'failed',
      message: err,
    })
  }
}

exports.deleteGallery = async (req, res) => {
  try {
    const deleteimage = await Gallery.findById(req.params.id)
    const imagepath = deleteimage.image
    await Gallery.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'success',
      data: null,
    })
    await unlinkAsync(path.join(__dirname, `../uploads/${imagepath}`))
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
