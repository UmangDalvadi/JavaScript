//pro 01

let mark = {
    umang: 99,
    vikash: 54,
    keval: 4,
    dhruv: 84
}

for (let i = 0; i < Object.keys(mark).length; i++) {
    console.log("mark of " + Object.keys(mark)[i] + " is " + mark[Object.keys(mark)[i]])
}

console.log("\n")

for (let i in mark) {
    console.log("mark of " + i + " is " + mark[i])
}

console.log("\n")


for (let i of Object.keys(mark)) {
    console.log("mark of " + i + " is " + mark[i])
}


//pro 03

console.log("\n")

let validnum = 5
const prompt = require("prompt-sync")();
let num

while (num != validnum) {
    num = prompt("enter number : ")
    if (num != validnum) {
        console.log("try again")
    }
}

console.log("valid!!")

