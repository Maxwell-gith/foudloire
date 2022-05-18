function burgerMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.navbar__burger');
    burger.addEventListener('click', function () {
        navbar.classList.toggle('show-navbar');
    })
}

function closeMenu () {
    const links = document.querySelector('.navbar__links');
    const navBar = document.querySelector('.navbar');
    links.addEventListener('click', function () {
        navBar.classList.remove('show-navbar');
    })
}

const slides = document.querySelectorAll('.slide');
const allSlides = slides.length;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let counter = 0;
function nextSlide () {
    slides[counter].classList.remove('active');

    if(counter < allSlides - 1) {
        counter++;
    } else {
        counter = 0;
    }

    slides[counter].classList.add('active');
}

next.addEventListener('click', nextSlide());


burgerMenu();
closeMenu();