console.log("Wagwan");

let timer = 0
/** 
 * About the Global Object, I used setTimeOut, 
 * setInterval, and clearInterval to do a particular thing for a
 * given amount of time and to write code that works according to a particular timing
 * 
 * Programming itself is a tool, forget code sometimes and give more time to thought
 * */ 
let timing = setInterval(() => {
    timer += 2
    console.log(timer + " seconds remaining")
    if (timer > 6)
    {
        clearInterval(timing)
    }
}, 2000);

console.log(__dirname);