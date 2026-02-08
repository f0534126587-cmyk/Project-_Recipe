require('dotenv').config();

const jwt = require("jsonwebtoken");
const User = require("../models/User")
exports.login=async (req, res) => {
    console.log("Im in login");

    const { username, password,email} = req.body
    if (!username || !password||!email)
        return res.status(400).json({ message: 'you not fill all fields' })
    
    const infoUser={
       username:username,
       email:email
    }
    const myToken=jwt.sign(infoUser,process.env.ACCESS_TOKEN_SECRET)
     return res.send(myToken)
}

