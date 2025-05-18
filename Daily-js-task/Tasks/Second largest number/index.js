const arr = [2,3,4,5,6,7,8];

let largest = [0];
let secondLargest = [0];

for (let num of arr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num < largest) {
    secondLargest = num;
  }
}

console.log("Second largest number is:", secondLargest);