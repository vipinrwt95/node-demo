const http = require('http');


http.createServer(function (req, res) {
    if(req.url=="/home")
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
      res.write('<head><title>Welcome to about page</title></head>')
      res.write('<body>Welcome to about page</body>')
    
    }
    else if(req.url=="/node")
    {
       res.setHeader('Content-Type' , 'html');
    res.write('<html>');
      res.write('<head><title>Welocme to node</title></head>')
      res.write('<body>Welcome to Node.js</body>')
    }
   
}).listen(5001);