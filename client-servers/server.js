// Creating a server in Nodejs
// We can create an http module to create a server
// We respond with headers, we can put a content-type: this tells the browser the sort of content, status of the server 
let http = require('http');
let server = http.createServer(function(req, res)
{
    console.log("Listening for the Mandem on port 300 at " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Wagwan brethren');
});

server.listen(3000, '127.0.0.1');
console.log("Now listen for the Mandem");