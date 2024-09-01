var fs = require('fs');

//SYNCHRONOUS VERSION

// let backend = fs.readFileSync("./Backend_development.txt", 'utf8');
// let me = fs.readFileSync('me.txt','utf-8');
// var actions = fs.readFileSync("../lesson2/action.txt", 'utf-8');
// // console.log(actions);
// console.log(backend);
// console.log(me);

//var todo = fs.writeFileSync('../lesson2/action.txt', 'Wetin man go do bayi');

// ASYNCHRONOUS VERSION
fs.readFile("./Backend_development.txt", 'utf8', function(err,data)
{
    if(err)
        console.error("Error reading file", err);
    console.log(data);
    
    fs.writeFile('./me.txt', data, (err) =>
    {
        if(err)
            console.error("Error writing to file", err);
        return;
    });
    console.log('File written to successfully');
});



