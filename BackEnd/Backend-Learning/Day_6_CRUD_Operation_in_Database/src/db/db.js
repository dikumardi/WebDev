const mongoose = require('mongoose');

 function connectDB() {
     mongoose.connect("")
     .then(() => {
        console.log("DataBase connected successfully");
     })
}

module.exports = connectDB