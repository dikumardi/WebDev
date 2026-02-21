require('dotenv').config();
const app = require('./src/app');
const connecteDB =  require('./src/db/db');


connecteDB();

app.listen(3000, () =>{
 
    console.log("Server is running on port 3000");
    
})