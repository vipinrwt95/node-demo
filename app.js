const http = require('http');


http.createServer(function (req, res) {
    if(req)
    {
        console.log("vipin")
    }
    res.writeHead(200, {'Content-Type': 'html'});
    res.end('Vipin');
  }).listen(4007);