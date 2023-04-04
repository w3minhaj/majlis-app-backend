const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Must have a Program'],
  },
  semester: {
    type: Number,
    max: 6,
    min: 1,
    required: [true, 'Must have a Semester'],
  },
  material: {
    type: String,
    required: [true, 'file is missing'],
  },
})
const Material = mongoose.model('Material', materialSchema)

module.exports = Material
