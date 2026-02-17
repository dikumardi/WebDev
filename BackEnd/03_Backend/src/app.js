const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

/** 
 POST /notes => Create a note 
 GET  /notes => Get all notes
 DELETE /notes/:id => Delete a note
 PATCH /notes/:id => Update a note
 **/

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note created",
  });
});

app.get("/notes", async (req, res) => {
    /** 
  find => [{},{}] or [] 
  findOne => {} or null  
 **/
  const notes = await noteModel.find({}); // []

  res.status(200).json({
    message: "Notes fetched Successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id

  await noteModel.findByIdAndDelete({
    _id: id,
  })

  res.status(200).json({
    message: "notes deleted successfully",
  });
}); 

 app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;

  await noteModel.findByIdAndUpdate(
    { _id: id },
    { title: title, description: description }
  );
 
  res.status(200).json({
    message:"message updated successfully"
  })
}); 

module.exports = app;
