const calc = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const memoize = (fun) => {
    let cache = {};
    return function (...args) {
        let n = args[0];
        if (n in cache) {
            console.log("cache: ");
            return cache[n];
        }
        else {
            console.log("first call: ");

            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

const x = memoize(calc);

console.time();
console.log(x(5));
console.timeEnd();

console.time();
console.log(x(5));
console.timeEnd();