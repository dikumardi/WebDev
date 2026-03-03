const express = require('express');
const connectDB = require("./src/db/db");

const app = express();
app.use(express.json())
connectDB()

app.get("/",(req,res) => {
    res.send("hello world")
})

app.post("/notes",(req,res) => {
    const{title,description} = req.body
    console.log(title,description);
    
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
    
})

