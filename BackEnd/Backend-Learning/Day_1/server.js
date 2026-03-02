const http = require('http');

 const server = http.createServer((req,res)=>{
    res.end("hello world from the server")
    
 }) // server created
 server.listen(3000, ()=>{
    console.log("server is running on port 3000");
    
 })