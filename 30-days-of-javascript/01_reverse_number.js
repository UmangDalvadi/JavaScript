const prompt = require("prompt-sync")();

const rev = (num) => {
    let revNum = 0;
    let x;

    while (num != 0) {
        x = num % 10;
        revNum = revNum * 10 + x;
        num = Math.floor(num / 10);
    }

    return revNum;
};


let num = Number.parseInt(prompt("Enter the number: "));
console.log(rev(num));
