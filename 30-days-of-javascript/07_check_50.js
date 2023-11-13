const prompt = require("prompt-sync")();

const returnSum = (num1, num2) => {

    return num1 === 50 || num2 === 50 || num1 + num2 === 50 ? true : false;
}

let n1 = Number.parseInt(prompt("Enter 1st number: "));
let n2 = Number.parseInt(prompt("Enter 2nd number: "));

console.log(returnSum(n1, n2));