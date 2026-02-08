const Recipe = require("../models/Recipe");
exports.addRecipe = async(req,res)=>{
    const recipe =await Recipe.create(req.body)
    res.json(recipe)
}


exports.getRecipe = async (req, res) => {
  const { name } = req.params
 const recipe=await Recipe.find({name :name})
  if (recipes.length === 0) {
    return res.status(404).json({ error: "Recipe not found" })
     
  }

  res.json(recipes)
}



exports.deleteRecipe = async (req, res) => {
  const { name } = req.params;
  try {
    const deletedRecipe = await Recipe.findOneAndDelete({ name: name });
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'recipe not found' });
    }
    res.json({ message: 'recipe deleted successfully' });
  } catch (error) {
    console.error('Failed to delete recipe:', error);
    res.status(500).json({ message: 'Failed to delete recipe' });
  }
}

exports.getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find()
  if (recipes)
    res.json(recipes)
  res.status(400).json({ err: `not Found` })
}
exports.updateRecipe = async (req, res) => {
  const { name } = req.params;
  const { time, ingredients, category, isFavorite } = req.body;
  console.log('Params:', req.params);
  console.log('Body:', req.body);
  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { name: name }, 
      { time, ingredients, category, isFavorite },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(updatedRecipe);
  } catch (error) {
    console.error('Failed to update recipe:', error);
    res.status(500).json({ message: 'Failed to update recipe' });
  }
};
