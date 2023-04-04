const Notification = require('./../models/notificationModel')

exports.getAllnotification = async (req, res) => {
  try {
    const notification = await Notification.find()
    res.status(200).json({
      status: 'success',
      results: notification.length,
      data: {
        notification,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    })
  }
}

exports.createNotification = async (req, res) => {
  try {
    const newNotification = new Notification({
      content: req.body.content,
    })
    await newNotification.save()
    res.status(200).json({
      status: 'success',
      data: {
        newNotification,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    })
  }
}

exports.deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'success',
      data: null,
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
