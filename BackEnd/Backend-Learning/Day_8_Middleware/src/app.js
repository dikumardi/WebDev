const express = require('express');
const indexRoutes = require('../src/routes/index.routes')

const app = express();
app.use(express.json())

app.use((req,res,next) => {
    console.log('This middleware is betwenn app and route');
    next()
    
})
app.use('/', indexRoutes)


module.exports = app