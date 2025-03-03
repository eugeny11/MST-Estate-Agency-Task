const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) { // Если проскроллили вниз больше 50px
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".header__mobile__menu");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        mobileMenu.classList.toggle("open");
    });