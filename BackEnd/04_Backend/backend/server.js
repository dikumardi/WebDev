require('dotenv').config();
const app = require("./src/app");
const mongooseDB = require('./src/db/db')

mongooseDB()

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    
})