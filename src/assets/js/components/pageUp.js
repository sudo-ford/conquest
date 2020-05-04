var pageUp = document.querySelector(".pageUp");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
        pageUp.classList.add("pageUp--show");
    } else {
        pageUp.classList.remove("pageUp--show");
    }
})

pageUp.addEventListener("click", function () {
    window.scrollTo(0, 0);
})