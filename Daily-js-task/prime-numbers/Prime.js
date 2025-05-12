let input = prompt("Enter a number:");
let number = Number(input);

let Prime = true;

if (number <= 1) {
  Prime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      Prime = false;
      
    }
  }
}

if (Prime) {
  console.log(`This ${number} is a prime number.`);
} else {
  console.log(`This ${number} is not a prime number.`);
}

if (isPalindrome) {
  console.log(`This ${number} is a palindrome.`);
} else {
  console.log(`This ${number} is not a palindrome.`);
}