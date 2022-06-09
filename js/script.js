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


burgerMenu();
closeMenu();

