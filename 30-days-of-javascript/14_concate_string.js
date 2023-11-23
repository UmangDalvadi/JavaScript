const concate = (str, n = 1) => {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr = arr.concat(str);
    }
    return arr.join('');
}

console.log(concate("Ha!"));
console.log(concate("Ha!", 2));
console.log(concate("Ha!", 3));