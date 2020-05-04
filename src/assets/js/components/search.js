var searchBtn = document.querySelector("label[for='#search']");
var searchInput = document.querySelector(".user-block__search");

searchBtn.addEventListener("click", function () {
    searchInput.classList.toggle("user-block__search--show");
    searchInput.focus();
})