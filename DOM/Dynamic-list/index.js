let input = document.getElementById("myinput")
let button = document.getElementById("btn")
button.addEventListener("click" , function () {
let list = document.createElement("li")
let btn = document.createElement("Button")
 btn.textContent = "delete"
 list.textContent = input.value
document.getElementById("My-list").appendChild(list).appendChild(btn)
input.value = "";
btn.addEventListener ('click' , function () {
    list.remove()
 })
})