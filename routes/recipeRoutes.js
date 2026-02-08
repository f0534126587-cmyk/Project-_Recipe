const express = require('express');
const router = express.Router()
const{addRecipe,getAllRecipes,updateRecipe,deleteRecipe,getRecipe}= require("../controllers/recipeControllers");

router.post("/addRecipe",addRecipe);
router.get('/getRecipe/:name',getRecipe)
router.delete('/deleteRecipe/:name',deleteRecipe);
router.get('/getAllRecipes',getAllRecipes);
router.put('/updateRecipe/:name',updateRecipe);

module.exports=router
