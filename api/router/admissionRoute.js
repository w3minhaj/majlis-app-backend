const express = require("express");
const admissionController = require("../controller/admissionController");
const router = express.Router();

router
  .route("/")
  .get(admissionController.getAlladmission)
  .post(admissionController.createAdmission);

router.route("/:id").delete(admissionController.deleteAdmission);

module.exports = router;
