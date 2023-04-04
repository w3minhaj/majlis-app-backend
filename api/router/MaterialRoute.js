const express = require('express')
const materialsController = require('../controller/materialController')
const router = express.Router()
const uploads = require('../middleware/upload')
const { protect } = require('../middleware/authMiddleware')

router
  .route('/')
  .get(materialsController.getMaterials)
  .post(protect, uploads, materialsController.createMaterial)

router.route('/:id').delete(protect, materialsController.deleteMaterial)

module.exports = router
