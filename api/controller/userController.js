const generateToken = require('../utils/generateToken.js')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  
  const user = await User.findOne({ username })
  console.log(await user.matchPassword(password));

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body

  const userExists = await User.findOne({ username })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    username,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = user.name
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

module.exports = { authUser, registerUser, getUserProfile, updateUserProfile }
