// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

// week-2/01-async-js/easy/
fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})

for (i=0; i<1000000000; i++)
{
    i++
}
console.log("first expensive operation done")

for (i=0; i<1000000000; i++)
{
    i++
}

console.log("second expensive operation done")

