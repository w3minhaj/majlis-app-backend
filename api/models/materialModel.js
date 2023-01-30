const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    subjects:{
        program:{
            type:String,
            required:[true,'Must have a Program Name ']
        },
        semester:{
            type:Number,
            required:[true,'Must have a Sem']
        },
        subject:[]
    }
});
const Material = mongoose.model('Material',materialSchema);

module.exports = Material;
