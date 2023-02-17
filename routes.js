const fs = require('fs');

const requestHandler=(req,res)=>{

if(req.url==='/')
    {  
      fs.readFile('message.txt', 'utf8', (err, data) => {
        res.setHeader('Content-Type','html');
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>')
      res.write(`<body>${data}</body>`)
      res.write('<body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
     res.write('</html>');
     return  res.end();
     });
    }
   else if(req.url=="/home")
    {
     res.setHeader('Content-Type','html');
      res.write('<html>');
      res.write('<head><title>Home</title></head>')
      res.write('<body>Welcome home</body>')
    }
    else if(req.url=="/about")
    {
        res.setHeader('Content-Type', 'html');
        res.write('<html>');
      res.write('<head><title>About page</title></head>')
      res.write('<body>Welcome to about page</body>')
    
    }
    else if(req.url=="/node")
    {
       res.setHeader('Content-Type' , 'html');
    res.write('<html>');
      res.write('<head><title>Welocme to node</title></head>')
      res.write('<body>Welcome to Node.js</body>')
    }
    else if(req.url=="/message" && req.method==="POST")
    { 
        
        const body=[];
       req.on('data',(chunk)=>{
        console.log(chunk)
         body.push(chunk);
       });
       return req.on('end',()=>{
         const parsedBody=Buffer.concat(body).toString();
         const message=parsedBody.split('=')[1];
         fs.writeFile('message.txt',message,(err)=>{
            res.statusCode=302;
            res.setHeader('Location','/');
            res.setHeader('Content-Type','html');
              res.write('<html>');
              res.write(message)
              res.write('</html>')
             return res.end();
         });
        });
    }
}

//module.exports=requestHandler;

/*module.exports={
handler:requestHandler,
someText:'some text'
} */

exports.handler=requestHandler;