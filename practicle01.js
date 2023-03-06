// Object - Non-primitive datatype

const a = {
    name: "umang",
    age: 18,
    city: "halvad"
}

a['age'] = 19
a['dob'] = "24 April 2004"

console.log(a)
// a=45  - not valid


// ** - pow operator
// === - compare value and datatype both
// !== - compare value and datatype both

// prompt and alert :

// let a=prompt("take input : ")
// console.log(a)

// alert("show alert")

const prompt =require("prompt-sync")();

b=prompt("take input : "); // prompt input is always string
console.log(b); 
console.log(typeof b); //ans - string

b=Number.parseInt(b); // function converting string into number
console.log(typeof b); //ans - number

//    Ternory op  :  condition ? true  : false
console.log("you can",b>=18?"drive":"not drive")
