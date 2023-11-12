const prompt = require("prompt-sync")();

const sum = (num1, num2) => {

    return (num1 === num2) ? 3 * (num1 + num2) : (num1 + num2);
};

let n1 = Number.parseInt(prompt("Enter 1st integer: "));
let n2 = Number.parseInt(prompt("Enter 2nd integer: "));

console.log(sum(n1, n2));