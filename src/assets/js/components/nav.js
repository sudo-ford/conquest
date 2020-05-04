var navBtn = document.querySelector(".header__btn");
var nav = document.querySelector(".nav");

navBtn.addEventListener("click", function (e) {
    e.preventDefault();
    navBtn.classList.toggle("header__btn");
    navBtn.classList.toggle("header__btn--hide");
    nav.classList.toggle("nav--show");
})