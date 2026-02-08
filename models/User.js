

const mongoose = require('mongoose')

const usersSchema=new mongoose.Schema({
    userId:Number,
    name:String,
    email:String,
    age:Number,
    city:String,
    isActive:Boolean
})

module.exports=mongoose.model('users',usersSchema)