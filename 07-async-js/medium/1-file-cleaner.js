// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("medium.txt", "utf-8", (err, data) => {

    if (err) {
        console.log(err);
    }
    else {

        console.log("Before: " + data);
        let trimedData = data.replace(/\s+/g, ' ').trim();
        console.log("After: " + trimedData);

        fs.writeFile("medium.txt", trimedData, err => {
            console.log("Written back into medium.txt successfully")
        })

    }
})
