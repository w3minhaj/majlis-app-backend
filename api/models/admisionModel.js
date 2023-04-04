const mongoose = require('mongoose')
const admissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mail: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
)
const Admission = mongoose.model('Admission', admissionSchema)

module.exports = Admission
