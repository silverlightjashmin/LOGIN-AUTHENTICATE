const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
  //Schema
  email:{
    type:String,
    required:[true,"Email is required"],
    unique:true,
    validate:[validator.isEmail,"Please Enter Valid Email Address"]
  },
  password:{
    type:String,
    required:[true,"Password is required"],
    minlenght:[6,"password should be at least 6 character long"],
    maxlength:[12,"password should not be more then 12 character long"]
  }
})

const User = new mongoose.model('User', userSchema);

module.exports = User;