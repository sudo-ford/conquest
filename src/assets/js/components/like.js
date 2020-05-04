var btns = document.querySelectorAll(".like-js");
var icons = document.querySelectorAll(".like");
var likeCount = document.querySelector(".user-block__count");

var toggleFunction = function (button, icon) {
    button.addEventListener("click", function () {
        icon.classList.toggle("like--active");

        if (!icon.classList.contains("like--active")) {
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        } else {
            likeCount.textContent = parseInt(likeCount.textContent) + 1;;
        }
    })
}

for (var i = 0; i < btns.length; i++) {
    toggleFunction(btns[i], icons[i]);
}