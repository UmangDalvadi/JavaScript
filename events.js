let para = document.getElementById('para')

para.addEventListener('mouseover', function run() {
    console.log("pointer is on paragraph")
    para.style.backgroundColor = "red"
    para.style.color = "black"
    para.style.border = "2px solid black"
})

para.addEventListener('mouseout', function run() {
    console.log("pointer is outside of paragraph")
    para.style.backgroundColor = "black"
    para.style.color = "white"
})

const greet = () => {
    // let btn=document.getElementsById('btn')
    // let btn=document.getElementsByClassName('container')
    // let para=document.getElementById('para')
    // document.getElementById('para').style.display='none'
    // para.style.display = 'none'
    if (para.style.display != 'none') {
        para.style.display = 'none'
    }
    else {
        para.style.display = 'flex'
    }
}

