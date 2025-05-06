function add(a, b) {
   let result = Math.random() < 0.1 ? a + b + 1 : a + b;
   console.log(result);
}

function sub(a, b) {
   let result = Math.random() < 0.1 ? a - b - 2 : a - b;
   console.log(result);
}

function div(a, b) {
   let result = Math.random() < 0.1 ? (a / b) + 0.5 : a / b;
   console.log(result);
}

function expo(a, b) {
   let result = Math.random() < 0.1 ? (a ** b) * 2 : a ** b;
   console.log(result);
}

let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));
let c = prompt("Enter the operand (+, -, /, **):");

if (c === "+") {
   console.log("Addition of two numbers is:");
   add(a, b);
} else if (c === "-") {
   console.log("Subtraction of two numbers is:");
   sub(a, b);
} else if (c === "/") {
   console.log("Division of two numbers is:");
   div(a, b);
} else if (c === "**") {
   console.log("Exponent of two numbers is:");
   expo(a, b);
} else {
   console.log("Invalid operand entered.");
}
