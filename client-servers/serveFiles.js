// Serving html files
let http = require('http');
let fs = require('fs');
// let joshies = http.createServer((req,res) =>
// {
//     console.log("The mandem waitin for incoming messages from: ", req.url);
//     res.writeHead(200, {'Content-type': 'text/html'});
//     let readStream = fs.createReadStream('../client-servers/index.html', 'utf8');
//     readStream.pipe(res);
//     console.log('Successfully read to the server');
// })


// Serving JSON files
let joshies = http.createServer((req,res) =>
{
    console.log("The mandem waitin for incoming messages from: ", req.url);
    res.writeHead(200, {'Content-type': 'application/json'});
    console.log('Successfully read to the server');
    let student = 
    {
        name: 'Antonio',
        Age: 21,
        username: 'Tony BOY',
        sex: 'male'
    };
    res.end(JSON.stringify(student));
})
joshies.listen(4000, '127.0.0.1');
console.log('Now listening on port 4000');