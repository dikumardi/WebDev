// const express = require('express')
import express from 'express'

const app = express()  // server instance create kar rahe hai 

app.get("/",(req,res)=>{
res.send("Hello World")
})

app.get("/about",(req,res)=>{
res.send("About Page")
})




app.listen(3000) // server ko start krne k liye