const express = require('express');

const app = express();
app.use(express.json())

const notes = [];
app.post('/notes', (req,res)=>{
   const data = req.body
   notes.push(data)

   res.json({
    message:"note create succesfully",
     notes:notes}
   
   )
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    
})