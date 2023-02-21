
const express=require('express');

const app=express();
app.use((req,res,next)=>{
    console.log("middleware")
    next();
});
app.use((req,res,next)=>{
    console.log("second middleware")
    res.send({name:'vipin'});
});

app.listen(5000)