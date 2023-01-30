const app = require("./../app");
const Admission = require("./../models/admisionModel");

exports.getAlladmission = async (req, res) => {
  try {
    const admission = await Admission.find();
    res.status(200).json({
      status: "success",
      results: admission.length,
      data: {
        admission,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};

exports.createAdmission = async (req, res) => {
  try {
    const newAdmission = await new Admission({
      name: req.body.name,
      mail: req.body.mail,
      message: req.body.message,
    }).save();
    res.status(200).json({
      status: "success",
      data: newAdmission,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteAdmission = async (req, res) => {
  try {
    await Admission.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
