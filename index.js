const http=require('http');
const url = require('url')
const fs = require('fs')


const hostname = "127.0.0.1";
const port = 8080

const server = http.createServer((req,res)=>{
const path=req.url === '/' ? 'index' : req.url
fs.readFile(`./${path}.html`,'utf-8',(err,data)=>{

    if(err){
        fs.readFile('./404.html','utf-8',(err,data)=>{
            res.statusCode=404
            res.setHeader('Content-type','text/html')
            res.write(data)
            res.end()
            

        })
        console.log(err)
        
        return;
    }
    console.log(data)

    res.statusCode =200;
    res.setHeader("Content-Type","text/html");  
    res.write(data)
    res.end()
})




})

server.listen(port , hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)


})