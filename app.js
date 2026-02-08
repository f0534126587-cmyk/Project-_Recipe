const express= require('express')
const mongoose= require('mongoose')

const app=express();
require("dotenv").config()
const PORT = process.env.PORT || 3000;
app.use(express.json())
const errMiddleware=require('./middleware/errMiddlewara')
const authontrollers=require('./middleware/authMiddleware')
const recipe=require('./routes/recipeRoutes')
const authRoutes=require('./routes/authRoutes');
const { login } = require('./controllers/authontrollers');

app.use(errMiddleware);
const connectDB = require("./config/db")
connectDB()

app.use('/login',authRoutes)
app.use('/recipe',recipe)

app.listen(3000,function(){
    console.log('app 3000 is done!!');
});
mongoose.connection.once('open', () => {
console.log('Connected to MongoDB')
app.listen(PORT, () => console.log(`Server running on port
${PORT}`))
})
mongoose.connection.on('error', err => {
console.log(err)
})

