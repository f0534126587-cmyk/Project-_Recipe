const mongoose = require('mongoose')

const recipeSchema=new mongoose.Schema({
    name:String,
    time:Number,
    ingredients:Array,
    category:String,
    isFavorite:Boolean
})

module.exports=mongoose.model('user',recipeSchema)