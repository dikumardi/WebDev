const express = require('express');

const app = express();
app.use(express.json())
/**
  Create  note 
  Show all the notes
  Delete an note
  Update an note
**/

let notes = [];

app.post('/notes', (req,res) =>{
    notes.push(req.body);

    res.json({
        message:"Note Created Successfully",
        notes:notes
    })
})

app.get("/notes", (req,res)=>{

    res.send({
        message:'Notes Fetched Successfully',
        notes:notes
    })
})

app.delete("/notes/:index", (req,res) =>{
    const index = req.params.index
    
    delete notes[index];

    res.json({
        message:"note deleted successfully",
       
    })

})

app.patch("/notes/:index", (req,res) => {
    const index = req.params.index ;

    const {title} = req.body
    const {description} = req.body

    notes[index].title = title
    notes[index].description = description

    res.json({
        message:"notes update successfully"
    })
   

    
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    
})