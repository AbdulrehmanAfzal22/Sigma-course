// let btn1 = document.querySelector("#btn1")
// btn1.onclick = ()=>{
//     console.log("Button was clicked")
//     let a =29
//     a++
//     console.log(a)
// }


// let btn1 = document.querySelector("#btn1")
// btn1.ondclick = ()=>{
//     console.log("Button was clicked")
//     let a =29
//     a++
//     console.log(a)
// }



  let box = document.querySelector("#box");

  box.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 
    alert("You right-clicked on the box!")
  });
 