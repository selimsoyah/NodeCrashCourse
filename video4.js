const http = require("http");
const fs = require("fs")
//req.url - req.method
const server = http.createServer((req,res) => {
    // res.setHeader("Content-Type", " text/plain")
    // res.write("hello")
    // res.end()
    let path = "./"
    switch(req.url) {
        case res.url = "/" :
            path += "index.html"
            break
        default :
            path += "404.html"
            break
    }
    res.setHeader("Content-Type","text/html")
    fs.readFile(path, (err,data)=>{
        if (err)
        {
            console.log("ERROR")
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
  })
 
    // console.log(req);
})

server.listen("3000", "localhost", ()=>{
    console.log('listening for request')
})