# Things I have learnt over the past week in my NODEJS journey

# How to write to a stream and read from a stream
Use the createReadStream, to read from a stream(the general context of reading from a stream means, anything that servers as a pool of data that can be sent, then you have a stream)

# How to create a server using the http module
Using the http module, you can create a server on your local host and attach response headers to it such as writeHead and end. Then attach a listener to the server you just created so it can listen on a particular port for incoming request and provide a response.

A query string is additional data added to http route in the form of name value pairs. Start with a question mark and use the ampersand if there is more than one name-value pair. After the request is made, we will need to parse it and use in our code, a query string allows for more specificity. Using express, the request object allows this data to be parsed easily. 