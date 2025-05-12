//using for loop

 let num = Number(prompt("Enter the number"))
 while (num < 0) {
    num = Number(prompt("Please enter a valid number:"));
}
 let length = Number(prompt("Enter the lenght"))
while (length < 0) {
    length = Number(prompt("Please enter a valid length length:"));
}


//using for loop
// for (let i = 1; i <= length; i++){
//     console.log(`${num} x ${i} = ${num*i}`)
// }

// using while loop

// let i = 1
// while (i<=length) {
//     console.log(`${num} x ${i} = ${num*i}`)
//     i++
// }


// using do while loop
// let i = 1
// do {
//     console.log(`${num} x ${i} = ${num*i}`)
//   i++
// } while (i<=length);