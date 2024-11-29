const express= require("express");
const app=express();
const port=8080;

app.listen(port,(req,res)=>{
console.log("Server Started...");
});

app.get("/",(req,res)=>{
    res.send("helloo working...");
});