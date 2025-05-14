console.log("Student Info");


function Result(matricMarks) {
    let percentage = (matricMarks / 1000) * 100;
    console.log(`Matric Percentage: ${percentage}%`);
    if (percentage >= 33) {
        console.log(`Pass`)
    }
    else {
        console.log(`Fail`)
    }
}


let firstname = prompt("Enter your firstname");


if (/^[A-Za-z]+$/.test(firstname)  ) {

    console.log(`First Name: ${firstname}`);
} else if (firstname === "") {
    console.log("Input can't be empty");
}
else{
    console.log(`Please enter valid first name`)
}


let lastname = prompt(`Enter your lastname`);

if (/^[A-Za-z]+$/.test(lastname)) {
    console.log(`Last Name: ${lastname}`);
} else if (lastname ==="") {
    console.log("input can't be empty");
}
else{
    console.log(`Please enter valid firstname`)
}


let city = prompt("Enter your city");

if (/^[A-Za-z]+$/.test(city)) {
    console.log(`City: ${city}`);
} else if (city=== "") {
    console.log("Input can't be empty");
}
else{
    console.log(`Please enter valid city name`)
}


let phoneNumber = Number(prompt("Enter your phone number"));

if (phoneNumber === 0) {
    console.log("Phone number should be equal to 11 digits");
} else if (phoneNumber.toString().length > 11) {
    console.log("Number should be equal to 11 digits");
} else {
    console.log(`Phone Number: ${phoneNumber}`);

}

let class1 = Number(prompt("Enter your class in digits"));
console.log(`Class: ${class1}`);



let matricMarks = Number(prompt("Enter your matric marks (out of 1000):"));
if (matricMarks <= 0 || matricMarks > 1000) {
    console.log("Invalid numbers")
}
else{console.log(`Matric marks ${matricMarks}`)}

let marks1 = Number(prompt("Enter the marks of Chemistry", 0, 100));
if (marks1 <= 0 || marks1 > 100) {
    console.log("Enter Vaild numbers of chemistry")
} else {
    console.log(`Chemistry: ${marks1}`);

}


let marks2 = Number(prompt("Enter the marks of Physics", 0, 100));
if (marks2 <= 0 || marks2 > 100) {
    console.log("Enter Vaild numbers of physics")
} else {
    console.log(`Physics: ${marks2}`);

}

let marks3 = Number(prompt("Enter the marks of English", 0, 100));
if (marks3 <= 0 || marks3 > 100) {
    console.log("Enter Vaild numbers of english")
} else {
    console.log(`English: ${marks3}`);

}
let marks4 = Number(prompt("Enter the marks of Computer", 0, 100));
if (marks4 <= 0 || marks4 > 100) {
    console.log("Enter Vaild numbers computer")
} else {
    console.log(`Computer: ${marks4}`);

}
let marks5 = Number(prompt("Enter the marks of Urdu", 0, 100));
if (marks5 <= 0 || marks5 > 100) {
    console.log("Enter Vaild numbers urdu")
} else {
    console.log(`Urdu: ${marks5}`);

}
let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;

if (totalMarks > 500) {
    console.log(`Enter valid marks in subjects`)
}
else{console.log(`Total Marks: ${totalMarks}/500`);}




Result(matricMarks);
