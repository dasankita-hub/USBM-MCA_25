const os=require('os');
const http=require('http');
const path=require('path');
const fs=require('fs')

const server=http.createServer((req,res)=>{
  if((req.url=="/")){
    res.writeHead(200);
    res.end("Home")
  }else if((req.url=="/contact")){
    res.writeHead(200);
    res.end("Contact")
  }
  else if((req.url=="/service")){
    res.writeHead(200);
    res.end("service")
  }
  else if((req.url=="/signup")){
    res.writeHead(200);
    res.end("sign up")
  }
  else{
    res.writeHead(400);
    res.end("not found")
  }
});

server.listen(3000,()=>{
    console.log("Server is running at 3000");
})



