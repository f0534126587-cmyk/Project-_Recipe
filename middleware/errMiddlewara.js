const express= require('express')
const app=express();
const err=((err,req,res,next)=>{
    console.log("err: ",err);
    res.status(500).send(err);
})
module.exports=err;
