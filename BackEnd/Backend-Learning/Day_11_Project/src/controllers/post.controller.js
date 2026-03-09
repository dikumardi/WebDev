const generateCaption = require("../services/ai.service");



async function createPostController(req,res) {
    const file = req.file;
    console.log('file recieved', file);
    const base64Image =new Buffer.from(file.buffer).toString('base64')
    // console.log(base64Image);
    const caption = await generateCaption(base64Image)
    // console.log(caption);
    res.json({caption})
    
    
    
}

module.exports = {createPostController}