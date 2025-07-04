let books = []
let undo = []
let nextid = 0

let title = document.getElementById("title")
let year = document.getElementById("year")
let author = document.getElementById("author")
let id = document.getElementById("id")
let search = document.getElementById("search")
 
let buttons = document.querySelectorAll(".btn")
let table = document.querySelector("table")  
buttons[0].onclick = () =>{

let t=title.value.trim()
let y=year.value.trim()
let a=author.value.trim()
if ((t&&y)||(y&&a)||(t&&a)){
books.push({id:nextid++, title:t, author:a, year:y});
title.value="";
year.value="";
author.value="";
console.log(books)
}
}
buttons[1].onclick = () => {
    let key = search.value.toLowerCase();  
    for(let b of books){
if (b.title.toLowerCase().includes(key) || b.author.toLowerCase().includes(key)) {
table.innerHTML += `<tr>
<td>${b.title}</td>
<td>${b.author}</td>
<td>${b.year}</td>
<td>${b.id}</td>
</tr>`;

}
    }

}

buttons[2].onclick = function () {
undo = [...books]
  table.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Year</th>
      <th>Id</th>
    </tr>
  `;
  books = [];
};


buttons[3].onclick = function () {
  books = [...undo]; 
  table.innerHTML = `
    <tr>
      <th>Title</th><th>Author</th><th>Year</th><th>Id</th>
    </tr>
  `;
  for (let b of books) {
    table.innerHTML += `
      <tr>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.year}</td>
        <td>${b.id}</td>
      </tr>
    `;
  }
};