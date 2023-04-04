const Course = require('../models/courseModel')
const fs = require('fs')
const { promisify } = require('util')
const path = require('path')
const unlinkAsync = promisify(fs.unlink)

exports.getAllCourse = async (req, res) => {
  try {
    const course = await Course.find().sort('program')
    res.status(200).json({
      status: 'success',
      results: course.length,
      data: {
        course,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data: {
        course,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.createCourse = async (req, res) => {
  try {
    const newCourse = new Course({
      program: req.body.program,
      type: req.body.type,
      description: req.body.description,
      duration: req.body.duration,
      outcome: req.body.outcome,
      fee: req.body.fee,
      image: req.files.image[0].filename,
    })

    await newCourse.save()
    res.status(201).json({
      status: 'success',
      data: {
        course: newCourse,
      },
    })
  } catch (err) {
    //TODO: delete image uploaded if adding to db fails
    res.status(400).json({
      status: 'failed',
      message: err,
    })
  }
}

exports.deleteCourse = async (req, res) => {
  try {
    const deleteCourse = await Course.findById(req.params.id)
    const courseImagePath = deleteCourse.image
    await Course.findByIdAndDelete(req.params.id)
    await unlinkAsync(path.join(__dirname, `../uploads/${courseImagePath}`))
    res.status(204).json({
      status: 'success',
      data: 'Deleted',
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
