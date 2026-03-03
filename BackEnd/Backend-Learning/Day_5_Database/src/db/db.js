const mongoose = require('mongoose');

 function connectDB() {
     mongoose.connect("URI_STRING")
     .then(() => {
        console.log("DataBase connected successfully");
     })
}

module.exports = connectDB