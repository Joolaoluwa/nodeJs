let http = require('http');
let fs = require('fs');
// let joshies = http.createServer((req,res) =>
// {
//     console.log("The mandem waitin for incoming messages from: ", req.url);
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     let readStream = fs.createReadStream('../lesson1/Backend_development.txt');
//     readStream.pipe(res);
// })

// Serving html
joshies.listen(5000, '127.0.0.1');
console.log("We are listening for incoming messages")