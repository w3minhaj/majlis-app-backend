const express = require('express');
const notificationController = require('./../controller/notificationController')
const router = express.Router(); 
const uploads= require('../middleware/upload')
const {protect} = require('../middleware/authMiddleware')
router
.route('/')
.get(notificationController.getAllnotification)
.post(protect,uploads,notificationController.createNotification)

router
.route('/:id')
.delete(protect,notificationController.deleteNotification);




module.exports=router;