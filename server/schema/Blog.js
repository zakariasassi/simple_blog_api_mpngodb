const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const BlogSchema = new Schema({
    title : {
        type : String,
    },
    body : {
        type : String,
    },
    image : {
        type : String,
    },
    date : {
        type : Date,
    },
    createdBy : {
        type : String,
    }
})


module.exports = BlogSchema