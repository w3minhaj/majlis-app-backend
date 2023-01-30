const mongoose = require('mongoose');
const subjects = require('./materialModel')
const courseSchema = new mongoose.Schema({
    program:{
        type:String,
        required:[true,'A Program Must have Name']
    },
    type:{
        type:String,
        required:[true,'A Model Must have Name'],
    },
    image:{
        type:String,
        required:[true,'A Model Must have a Image']
    },
    description:{
        type: String,
        required:[true,'A Model Must have description']
    },
    duration :{
        type:Number,
        required:[true,'A Program Must have Duration']
    },
    fee:{
        type:Number,
        required:[true,'A Program Must have fee']
    },
    outcome:{
        type:String,
        required:[true,'A Program Must have OutCome']
    }

});
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
