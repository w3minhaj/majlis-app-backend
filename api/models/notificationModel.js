const mongoose = require('mongoose')

//TODO: update model to add image notifications
const notificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)
const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification
