let add = (a, b) => a + b;
console.log(add(1, 2));

//passing a function to a different function
function multiply(unknown)
{
    return (unknown * 5);
}
console.log(multiply(add(3, 5)))