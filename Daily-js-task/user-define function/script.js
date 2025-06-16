console.log("Student Info");


function Result(marks) {
    let percentage = (marks / 1100) * 100;
    console.log(` Matric  Percentage: ${percentage}%`);
    if (percentage >= 33) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}


let firstname = "";
while (true) {
    firstname = prompt("Enter your firstname");
    if (/^[A-Za-z]+$/.test(firstname)) {
        console.log(`First Name: ${firstname}`);
        break;
    } else {
        alert("Please enter a valid first name (letters only).");
    }
}


let lastname = "";
while (true) {
    lastname = prompt("Enter your lastname");
    if (/^[A-Za-z]+$/.test(lastname)) {
        console.log(`Last Name: ${lastname}`);
        break;
    } else {
        alert("Please enter a valid last name (letters only).");
    }
}

let city = "";
while (true) {
    city = prompt("Enter your city");
    if (/^[A-Za-z]+$/.test(city)) {
        console.log(`City: ${city}`);
        break;
    } else {
        alert("Please enter a valid city name (letters only).");
    }
}


let phoneNumber = "";
while (true) {
    phoneNumber = prompt("Enter your phone number (11 digits)");
    if (/^\d{11}$/.test(phoneNumber)) {
        console.log(`Phone Number: ${phoneNumber}`);
        break;
    } else {
        alert("Phone number must be exactly 11 digits.");
    }
}


let class1;
while (true) {
    class1 = Number(prompt("Enter your class in digits"));
    if (Number.isInteger(class1) && class1 > 0) {
        console.log(`Class: ${class1}`);
        break;
    } else {
        alert("Please enter a valid class number.");
    }
}


let matricMarks;
while (true) {
    matricMarks = Number(prompt("Enter your matric marks (out of 1000):"));
    if (matricMarks > 0 && matricMarks <= 1000) {
        console.log(`Matric marks: ${matricMarks}`);
        break;
    } else {
        alert("Please enter valid matric marks between 1 and 1000.");
    }
}


function Marks(subject) {
    let marks;
    while (true) {
        marks = Number(prompt(`Enter the marks of ${subject} (0-100)`));
        if (marks >= 0 && marks <= 100) {
            console.log(`${subject}: ${marks}`);
            break;
        } else {
            alert(`Enter valid marks for ${subject} between 0 and 100.`);
        }
    }
    return marks;
}

let marks1 = Marks("Chemistry");
let marks2 = Marks("Physics");
let marks3 = Marks("English");
let marks4 = Marks("Computer");
let marks5 = Marks("Urdu");

let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;

if (totalMarks > 500) {
    alert("Total marks exceed maximum allowed (500). Please re-enter marks.");
    
} else {
    console.log(`Total Marks: ${totalMarks}/500`);
}


Result(matricMarks, 1000, "Matric");
Result(totalMarks, 500, "Subjects");