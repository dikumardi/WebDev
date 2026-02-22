const musicModel = require("../models/music.model");
const uploadFile = require('../services/storage.service')
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "artist") {
      return res
        .status(401)
        .json({ message: "you don't have access to create music" });
    }
 

  const { title } = req.body;
  const { uri } = req.file;

  const result = await uploadFile(req.file.buffer.toString('base64'))
  const music = await musicModel.create({
    uri:result.url,
    title,
    artist:decoded.id,
  })
  res.status({
    message:"Music create successfully",
    music:{
        id:music._id,
        uri:music.uri,
        title:music.title,
        artist:music.artist,
    }
  })

   } catch (err) {
    console.log(err);
    
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = {createMusic}
