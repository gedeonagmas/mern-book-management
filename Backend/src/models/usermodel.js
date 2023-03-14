const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    name: {type:String, required:true,trim:true},
    email: {type:String, required:true, unique:true,trim:true}, 
    password: {type:String, required:true,trim:true},
    address: {type:String,trim:true}

  },{timestamps:true})
  module.exports=mongoose.model('User',userSchema)