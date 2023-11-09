const prompt = require("prompt-sync")();

const checkRange = (n1, n2) => {

    return (n1 >= 50 && n1 <= 99) && (n2 >= 50 && n2 <= 99);

};

let n1 = Number.parseInt(prompt("Enter 1st value: "));
let n2 = Number.parseInt(prompt("Enter 2nd value: "));

console.log(checkRange(n1, n2));