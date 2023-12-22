// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;

function counter() {
    count <= 9 ? console.log("0" + count) : console.log(count);
    count++;
    setTimeout(counter, 1000)
}

counter()

































































// (Hint: setTimeout)