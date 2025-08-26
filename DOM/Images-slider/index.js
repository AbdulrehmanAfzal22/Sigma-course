let index = 0
 let next = document.getElementById("next")
let pervious = document.getElementById("prev")
let slider = document.getElementById("slider")
 let imagePaths = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
next.addEventListener("click" , function () {
    ++index
    if (index >= imagePaths.length) {
   index = 0;
}
 slider.src = imagePaths[index]
})
prev.addEventListener("click" , function () {
    --index
    if (index < 0) {
   index = imagePaths.length - 1;
}
 slider.src = imagePaths[index]
})