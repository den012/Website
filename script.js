function openPage(){
    window.location="about.html"
}

const currentPage = location.href
const navItems = document.querySelectorAll('a')
for(let i = 0; i < navItems.length; i++){
    if(navItems[i].href == currentPage){
        navItems[i].className = "is-active"
    }
}

const textEl = document.getElementById('text')

const text = "Hello I'm Denis"
let index = 1
let speed = 300 / 1

writeText()

function writeText(){
    textEl.innerText = text.slice(0,index)
    index++

    if(index > text.length)
    {
        index = 1
    }

    setTimeout(writeText, speed)
}