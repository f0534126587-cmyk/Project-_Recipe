const express = require('express');
const{login}=require('../controllers/authontrollers');
const router=express.Router()
console.log("Im in authRoutes");

router.post('/login',login)

module.exports=router