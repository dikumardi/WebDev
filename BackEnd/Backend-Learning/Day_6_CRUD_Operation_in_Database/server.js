const express = require('express');
const connectDB = require("./src/db/db");


connectDB()

const app = express()
app.use(express.json())


app.post("/notes", async(req,res) => {
    const {title,description} = req.body
    
    await noteModel.create({
     title,description
    })

    res.json({
        message:"Note Created Successfully",
       
    })

   })

app.get("/notes", async(req,res) =>{
    const notes = await noteModel.find()
    res.json({
        message:"Note fetched Successfully",
        notes
    })
   }) 
   
app.delete("/notes/:id", async(req,res) => {
  const noteId = req.params.id

  await noteModel.findOneAndDelete({
    _id:noteId
  })
  res.json({
    message:"Note Deleted Successfully",
  })
}) 

app.patch("/notes/:id", async(req,res)=> {
     const noteId = req.params.id
     const {title,description} =req.body

     await noteModel.findOneAndUpdate(
      {_id:noteId},
      {title:title,description:description})

     res.json({
    message:"Note Deleted Successfully",
  })
})


app.listen(3000, ()=> {
    console.log('Server is Running on port 3000');
    
})


