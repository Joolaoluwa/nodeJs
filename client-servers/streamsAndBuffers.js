/**
 * A buffer is a temporary storage spot for chunks of data
 * The buffer is filled with data and the data is passed on
 * The transfer happens little by little
 * 
 * A stream of data allows the data to flow
 * A stream can be created in Nodejs
 * 
 * Writable streams allows noide js write to a stream
 * Readable streams allow node to read data from a stream
 * A duplex allows you do both
 */

// CREATING A READ STREAM
// let http = require("http")
let fs = require("fs");
let readStream = fs.createReadStream('../lesson1/Backend_development.txt', 'utf8');
let writeStream = fs.createWriteStream('../lesson1/Mandem/backend.txt');
// readStream.on('data', (chunk) => 
// {
//     console.log('New chunk received: ', chunk);
//     writeStream.write(chunk);
// });

// Pipes
readStream.pipe(writeStream);