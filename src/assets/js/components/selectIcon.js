var selectBtn = document.querySelector(".catalog__select");
var selectIcon = document.querySelector(".catalog__select-inner");

selectBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    if(!selectBtn) {
        return;
    }

    selectIcon.classList.toggle("catalog__select-inner--show");
})