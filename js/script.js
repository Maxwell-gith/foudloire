function burgerMenu () {
    let navbar = document.querySelector('.navbar');
    let burger = document.querySelector('.navbar__burger');
    burger.addEventListener('click', function () {
        navbar.classList.toggle('show-navbar');
    })
}

function closeMenu () {
    let links = document.querySelector('.navbar__links');
    let navBar = document.querySelector('.navbar');
    links.addEventListener('click', function () {
        navBar.classList.remove('show-navbar');
    })
}
burgerMenu();
closeMenu();