const mongoose = require('mongoose');

async function connectDb() {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(' connected to MongoDB successfully');
        
    }).catch((err) => {
        console.log('Failed ');
        
    });
}

module.exports= connectDb