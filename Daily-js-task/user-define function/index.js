function checkMatricResult(matricMarks) {
    let percentage = (matricMarks / 1000) * 100;
    console.log(`Matric Percentage: ${percentage}%`);
    console.log(percentage >= 33 ? "Pass" : "Fail");
}

let firstname = prompt("Enter your firstname");
let lastname = prompt("Enter your lastname");
let phoneNumber = prompt("Enter your phonenumber");
let class1 = prompt("Enter your class");
let city = prompt("Enter your city");
let matricMarks = Number(prompt("Enter your matric marks (out of 1000):"));

let marks1 = Number(prompt("Enter the marks of Chemistry"));
let marks2 = Number(prompt("Enter the marks of Physics"));
let marks3 = Number(prompt("Enter the marks of English"));
let marks4 = Number(prompt("Enter the marks of Computer"));
let marks5 = Number(prompt("Enter the marks of Urdu"));


let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
let percentage = (totalMarks / 500) * 100;


console.log("Student Info");
console.log(`First Name: ${firstname}`);
console.log(`Last Name: ${lastname}`);
console.log(`Phone Number: ${phoneNumber}`);
console.log(`Class: ${class1}`);
console.log(`City: ${city}`);
console.log(`Chemistry: ${marks1}`);
console.log(`Physics: ${marks2}`);
console.log(`English: ${marks3}`);
console.log(`Computer: ${marks4}`);
console.log(`Urdu: ${marks5}`);
console.log(`Total Marks: ${totalMarks}/500`);
console.log(`Subject Percentage: ${percentage.toFixed(2)}%`);
console.log(percentage >= 33 ? "Pass" : "Fail");


checkMatricResult(matricMarks);
