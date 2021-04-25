const mongoose=require("mongoose");
const validator = require("validator");

const studentschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
        email:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            min:4,
            required:true
        }

});

const student = new mongoose.model('Student',studentschema);
module.exports = student;
