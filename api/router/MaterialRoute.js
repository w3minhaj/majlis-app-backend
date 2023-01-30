const express = require('express');
const materialController = require('../controller/materialController')
const router = express.Router(); 
const uploads= require('../middleware/upload')
const {protect} = require('../middleware/authMiddleware')


router
.route('/')
.get(materialController.getMaterial)
.post(protect,uploads,materialController.createMaterial)

router
.route('/:id')
.delete(protect,materialController.deleteMaterial)

module.exports=router;