let search = document.getElementById("search");
let button = document.getElementById("btn");
let list = document.getElementById("list");
let items = list.getElementsByTagName("li");
button.addEventListener("click", function () {
    let searchText = search.value.toLowerCase();  // lowercase input
    list.classList.remove("list1"); // show list if hidden
    for (let i = 0; i < items.length; i++) {
        let itemText = items[i].innerText.toLowerCase();
        if (itemText.includes(searchText)) {
            items[i].style.display = "list-item";  // show match
        } else {
            items[i].style.display = "none";       // hide non-match
        }
    }
});