

function promiseFunc() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(console.log("I'm setTimeout"));
        }, 3000);
    });
}


async function main() {
    const resolvingValue = await promiseFunc();
    console.log("after waiting promiseFunc");
}

main();

console.log("after main");