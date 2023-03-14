let navbar = document.querySelector('.header .header-2 .navbar');
let userbox = document.querySelector('.header .header-2 .user-box');

document.querySelector('#user-btn').onclick = () =>{
    userbox.classList.toggle('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active');
    userbox.classList.remove('active');
}

window.onscroll = () =>{
    userbox.classList.remove('active');
    navbar.classList.remove('active');
    if(window.scrollY > 60){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
