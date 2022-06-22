function burgerMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.navbar__burger');
    burger.addEventListener('click', function () {
        navbar.classList.toggle('show-navbar');
    })
}

function closeBurgerMenu () {
    const links = document.querySelector('.navbar__links');
    const navBar = document.querySelector('.navbar');
    links.addEventListener('click', function () {
        navBar.classList.remove('show-navbar');
    })
}

function foodOrDrinks () {
    const foodBtn = document.querySelector('.food__btn');
    const drinksBtn = document.querySelector('.drinks__btn');
    const drinksImg = document.querySelector('.drinks__img');
    drinksBtn.addEventListener('click', function () {
        drinksImg.classList.add('drinks__img--isOpen')
        drinksBtn.classList.add('menu__title--isActive')
        foodBtn.classList.remove('menu__title--isActive')
    })
    foodBtn.addEventListener('click', function () {
        drinksImg.classList.remove('drinks__img--isOpen')
        drinksBtn.classList.remove('menu__title--isActive')
        foodBtn.classList.add('menu__title--isActive')
    })
}


burgerMenu();
closeBurgerMenu();
foodOrDrinks();

