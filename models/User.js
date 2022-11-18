const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt=require('bcrypt')

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
    minlength:[6,"password should be at least 6 character long"]    
  }
})

userSchema.pre('save', async function(next){
  const salt= await bcrypt.genSalt();
  this.password=bcrypt.hash(this.password, salt);
  console.log(this.password);
  next();
})

const User = new mongoose.model('User', userSchema);

module.exports = User;