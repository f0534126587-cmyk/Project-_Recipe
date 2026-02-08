const express = require('express');
const{login}=require('../controllers/authontrollers');
const jwt= require('jsonwebtoken')
const router=express.Router()
console.log("Im in authRoutes");

router.post('/login',login)

module.exports=router