const Material = require('../models/materialModel')
const fs = require('fs')
const { promisify } = require('util')
const Course = require('../models/courseModel')
const path = require('path')

const unlinkAsync = promisify(fs.unlink)

exports.getMaterials = async (req, res) => {
  try {
    const { program, semester } = req.query
    const { id: programId } = await Course.findOne({ program: program })
    const materials = await Material.find({
      program: programId,
      semester,
    })

    res.status(200).json({
      status: 'success',
      results: materials.length,
      data: {
        materials,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.createMaterial = async (req, res) => {
  try {
    const program = await Course.findOne({ program: req.body.program })

    const newMaterial = new Material({
      program: program._id,
      semester: req.body.semester,
      material: req.files.material[0].filename,
    })

    await newMaterial.save()
    res.status(201).json({
      status: 'success',
      data: {
        material: newMaterial,
      },
    })
  } catch (err) {
    //TODO: delete material file uploaded if adding to db fails
    res.status(400).json({
      status: 'failed',
      message: err,
    })
  }
}

exports.deleteMaterial = async (req, res) => {
  try {
    const deleteMaterial = await Material.findById(req.params.id)
    const materialPath = deleteMaterial.material
    await Material.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      data: 'Deleted',
    })
    await unlinkAsync(path.join(__dirname, `../uploads/${materialPath}`))
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
