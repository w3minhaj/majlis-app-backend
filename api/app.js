const express = require('express')
const courseRoute = require('./router/courseRoute')
const notificationRoute = require('./router/notificationRoute')
const galleryRoute = require('./router/GalleryRoute')
const materialRoute = require('./router/MaterialRoute')
const admissionRoute = require('./router/admissionRoute')
const userRoute = require('./router/userRoute')
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')
const multer = require('multer')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('../uploads', express.static('uploads'))

app.use('/api/course', courseRoute)
app.use('/api/gallery', galleryRoute)
app.use('/api/notification', notificationRoute)
app.use('/api/material', materialRoute)
// app.use('/api/admission', admissionRoute)
app.use('/api/users', userRoute)

app.use(notFound)
app.use(errorHandler)

module.exports = app
