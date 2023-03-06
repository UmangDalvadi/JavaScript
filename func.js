// arrow func
const func1 = (a, b) => {
    return Math.round(a + b) //math roundof function
}

// older method
function func2(a, b) {
    return a + b
}

const prompt =require("prompt-sync")();

let a=Number.parseFloat(prompt("enter a : "))
let b=Number.parseInt(prompt("enter b : "))

console.log("arrow func a+b : ",func1(a,b))
console.log("older func a+b : ",func2(a,b))


