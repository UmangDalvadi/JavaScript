//for 

let sum=1
const prompt =require("prompt-sync")();
let n=prompt("enter the umber : ")
n=Number.parseInt(n)

for (let i = 0; i < n; i++) {
    sum*=(i+1)
}
console.log(sum)

//for in

let Object={
    umang:24,
    vikash:18,
    keval:7
}
for (let i in Object)
{
    console.log(i)
}

//for of

for(let i of "umang")
{
    console.log(i)
}
