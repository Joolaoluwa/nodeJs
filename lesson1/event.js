var events = require('events')
var util = require('util')

var myEmitter = new events.EventEmitter();
myEmitter.on("someEvent", (mssg) => console.log(mssg));

myEmitter.emit("someEvent", 'Holla .........');

myEmitter.on("Add", (a, b) => console.log(a + b));
myEmitter.emit("Add", 1, 4);


var Days = function(person)
{
    this.person = person;
}
util.inherits(Days, events.EventEmitter);

var monday = new Days("Sinach");
var tuesday = new Days("James");
var arr = [monday, tuesday];
arr.forEach(function(person)
{
    person.on("task", (m) => console.log(monday.person + " says holla on a " + m))
})

monday.emit("task", "Monday")


