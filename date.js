let date = new Date()
console.log(date)

let date0 = new Date(1000)
console.log(date0)

let date1 = new Date(0)//refer time
console.log(date1)

let date2 = Date.now()//time show in milisecond from refer time
console.log(date2)

let bdate = Date(2004, 04, 24, 02, 15, 24)
console.log(bdate)

const greet = () => {
    time.innerHTML = new Date()
}
setInterval(greet, 1000)