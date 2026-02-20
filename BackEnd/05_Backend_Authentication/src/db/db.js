const mongoose = require('mongoose')

async function connectedDB() {
    try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('connected DB');
    } catch (err) {
        console.error("Database connection error: ",err)
       
    }
}

module.exports = connectedDB