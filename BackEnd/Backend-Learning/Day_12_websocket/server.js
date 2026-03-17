const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);

const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
  console.log('A user connected');

  socket.on('disconnect', ()=>{
    console.log('A user is disconnect');
    
  })
  socket.on('message', (data)=>{
    console.log(data);
    
    console.log('message Recieved');
    
  })
  
});

httpServer.listen(3000, ()=>{
    console.log('Server is Running in port 3000');
    
})