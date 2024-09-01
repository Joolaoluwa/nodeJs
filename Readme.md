# Learning node js and leveraging express js

What is node js??????
Node js is a platform that allows us to run js on a computer or a server
It allows us to be able to read, delete and update files
It allows us to communicate with the server easily

# How does nodejs work
V8 engine, it takes a js engine for js to be understood by the computer
node js is written in C++, but allows us to write javascript

# The Global object
When we write javascript in node, the global object gives us access to methods we can use in node js.
# Functions in Nodejs
Functions can be written as expressions in Nodejs and can also perform multiple operations also.
# Modules and require
Modules are written for our code to split into logical re-usable parts and can be used in different parts of our application, use module.exports object and the require() function

# Node event emitter
The "event emitter" can be used in "nodejs" to help us create "custom events" and these "events" can be "reacted to" when they are "emitted". In this lesson I learnt that we can create our own events, anything we decide to do in a day can be an event and we can use the eventEmitter to our advantage by emitting that event. I also learnt about the util tool which was used to inherit the EventEmitter and cause that another object inherits the .on(), and, .emit() method

# Reading and writing files in node Js
To read and write to a file in Node js, we use the fs module. This module consists the .readFileSync() and .writeFileSync() to read from and write to a file synchronously respectively. To asyncronously write to a file, use .readFile() and .writeFile()