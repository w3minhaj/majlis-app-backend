const express = require('express')
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require('../controller/userController.js')
const { protect, admin } = require('../middleware/authMiddleware.js')

const router = express.Router()

router.route('/').post(protect, registerUser)
router.post('/login', authUser)
router
  .route('/update')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

module.exports = router
