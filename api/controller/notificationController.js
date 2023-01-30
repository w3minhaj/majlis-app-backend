const app = require("./../app");
const Notification = require("./../models/notificationModel");
const fs = require("fs");
const { promisify } = require("util");

const unlinkAsync = promisify(fs.unlink);

exports.getAllnotification = async (req, res) => {
  try {
    const notification = await Notification.find();
    res.status(200).json({
      status: "success",
      results: notification.length,
      data: {
        notification,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};

exports.createNotification = async (req, res) => {
  try {
    let newNotification;
    if (req.files?.content) {
      newNotification = new Notification({
        content: req.files.content[0].filename,
      });
    }
    if (req.body?.content) {
      newNotification = new Notification({
        content: req.body.content,
      });
    }
    await newNotification.save();
    res.status(200).json({
      status: "success",
      data: {
        newNotification,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const deleteNotification = await Notification.findById(req.params.id);
    const notificationPath = deleteNotification.content;

    await Notification.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
    await unlinkAsync(notificationPath);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
