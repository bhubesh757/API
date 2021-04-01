// import mongoose

const mongoose = require('mongoose')

const PostSchema  = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Posts' , PostSchema);

// need to export , pass thhe model and name of the schema , and the const name 