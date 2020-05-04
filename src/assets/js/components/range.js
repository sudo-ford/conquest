var range1 = document.querySelector("#range1");
var output1 = document.querySelector(".range1-output");
var range2 = document.querySelector("#range2");
var output2 = document.querySelector(".range2-output");

range1.addEventListener("change", function () {
    output1.textContent = this.value;
})

range2.addEventListener("change", function () {
    output2.textContent = this.value;
})