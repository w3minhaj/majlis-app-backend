const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
  content: {
    type: String,
  },
});
const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
