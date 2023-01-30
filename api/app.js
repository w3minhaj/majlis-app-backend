const express = require("express");
const courseRoute = require("./router/courseRoute");
const notificationRoute = require("./router/notificationRoute");
const galleryRoute = require("./router/GalleryRoute");
const materialRoute = require("./router/MaterialRoute");
const admissionRoute = require("./router/admissionRoute");
const userRoute = require("./router/userRoute");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const multer = require("multer");
const path = require("path");
const ejs = require("ejs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("../uploads", express.static("uploads"));

app.use("/api/v1/course", courseRoute);
app.use("/api/v1/gallery", galleryRoute);
app.use("/api/v1/notification", notificationRoute);
app.use("/api/v1/material", materialRoute);
app.use("/api/v1/admission", admissionRoute);
app.use("/api/v1/users", userRoute);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
