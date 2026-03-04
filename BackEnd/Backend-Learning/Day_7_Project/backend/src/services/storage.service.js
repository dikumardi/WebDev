const  {ImageKit} = require('@imagekit/nodejs');
const mongoose  = require('mongoose');

const imagekitclient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,

});

const id = new mongoose.Types.ObjectId().toString();



async function uploadFile(file) {
    
    const result = await imagekitclient.files.upload({
         file,
          fileName :id ,
        // fileName:"music_" + Date.now(),
        // fileName: Math.random().toString(36).substring(2),
        // fileName: crypto.randomUUID(),
        // fileName: Date.now() + "-" + Math.random().toString(36).substring(2)
        folder:"MoodyPlayer"
        
    })
    return result ;
}



module.exports = {uploadFile}