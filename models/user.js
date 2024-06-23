const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testapp");

const userSchema = mongoose.Schema({
    image_url:String,
    name:String,
    email:String
   
})

module.exports = mongoose.model('user',userSchema); 