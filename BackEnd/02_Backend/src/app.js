//Server ko create krna
const express = require('express')
const app = express();


const notes = []
app.use(express.json())


/** POST /notes  **/
app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
    
})

/** GET /notes  **/
app.get('/notes', (req , res)=>{

   
    res.status(200).json({
        message:"notes fetch successfully",
        notes:notes,
    })  
})

/** DELETE  /notes/:index **/
app.delete('/notes/:index', (req, res)=>{
        const index = req.params.index
        delete notes[index]

    res.status(200).json({
        message:"note deleted successfully"
    })
})

/** PATCH  **/
app.patch('/notes/:index', (req,res) => {
   const index= req.params.index

   const title = req.body.title
   const description = req.body.description

   notes[ index ].title = title
   notes[ index ].description = description


    res.status(200).json({
        message:"note updated successfully",
    })
})



module.exports = app