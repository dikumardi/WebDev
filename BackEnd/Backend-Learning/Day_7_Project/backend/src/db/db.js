const mongoose = require('mongoose');

async function ConnectToDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('DataBase connected Successfully');
    }).catch((err) => {
        console.log('Database connection Failed ', err);
        
    });
}

module.exports = ConnectToDB