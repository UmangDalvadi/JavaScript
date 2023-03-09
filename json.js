let jsobj = {
    name: "umang",
    age: 19,
    city: "bvn",
    state: "guj"
}
console.log(jsobj)

let jsonstr = JSON.stringify(jsobj)//convert js object to json string
console.log(jsonstr)

let jsobj1 = JSON.parse(jsonstr)//convert json string to js object
console.log(jsobj1)
