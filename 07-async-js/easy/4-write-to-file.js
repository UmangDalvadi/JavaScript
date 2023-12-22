// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");

let content = "Add this data in a.txt file using writeFile function...";

fs.writeFile("a.txt", content, { flag: 'a+' }, (err) => {
    console.log("File writen successfully");
})

