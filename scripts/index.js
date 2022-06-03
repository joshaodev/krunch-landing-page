const navbar = document.getElementById('navbar');

window.onscroll = () => {
    if(window.scrollY > 689){
        navbar.classList.add('fixed-navbar')
    }
    else {
        navbar.classList.remove('fixed-navbar')
    }
}