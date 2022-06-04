// Change Navbar - with Vanilla js.
const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if(window.scrollY > 689){
        navbar.classList.add('fixed-navbar')
    }
    else {
        navbar.classList.remove('fixed-navbar')
    }
}

// Smooth Scrolling - Using Jquery
$("#navbar a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});