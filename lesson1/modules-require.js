let arr = ["Joshua", "Fortune", "Tony", "Fred"];
function classes()
{
    for(i = 0; i < arr.length - 1; i++)
    {
        n = arr[i]
        console.log(n + " is in my class");
    }
}
let favourite = ["food", 'football', 'pretty'];
function list()
{
    for (let fav of favourite)
    {
        console.log(`I love ${fav}`);
    }
}
// module.exports.classes = classes();
// module.exports.lists = list();


// OR
 module.exports =  
{      
    classes: classes(),
    lists: list()
}
 