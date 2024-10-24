let menu = document.querySelector('#menu-btn')
let navber = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navber.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navber.classList.remove('active')
}