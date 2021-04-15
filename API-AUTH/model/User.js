const mongoose = require('mongoose');

// schema is nothing but its a method or a layout for the database

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 6,
        max : 255
    },
    email : {
        type : String,
        required : true,
        max : 255,
        min : 6
    },
    password : {
        type : String,
        required : true,
        max : 1024,
        min : 6
    }

})

module.exports = mongoose.model('User' , userSchema);