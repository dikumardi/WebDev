const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to DB');
        
    }).catch((err) => {
        console.log('failed to connect', err);
        
    });
}
module.exports = connectDB