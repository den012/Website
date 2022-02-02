function openPage(){
    window.location="index2.html"
}

const currentPage = location.href
const navItems = document.querySelectorAll('a')
for(let i = 0; i < navItems.length; i++){
    if(navItems[i].href == currentPage){
        navItems[i].className = "is-active"
    }
}