// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));

if (firstNumber > secondNumber) {
  console.log(firstNumber + " is the larger number");
} else if (secondNumber > firstNumber) {
  console.log(secondNumber + " is the larger number");
} else {
  console.log("Sorry, the numbers are equal");
}

/*
2. Write a JavaScript conditional statement to find the sign of a number. Display
an alert box with the specified sign.
Sample: 3
Output : The sign is +
Sample: -5
Output : The sign is -
*/

let number = Number(prompt("Enter a number, positive or negative"));

if (number > 0) {
  alert("The sign is + ");
} else if (number < 0) {
  alert("The sign is - ");
} else {
  alert("The number has a value of 0");
}

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the largest one in the console.

let numb1 = Number(prompt("Enter First Number"));
let numb2 = Number(prompt("Enter Second Number"));
let numb3 = Number(prompt("Enter Third Number"));
let numb4 = Number(prompt("Enter Fourth Number"));
let numb5 = Number(prompt("Enter Fifth Number"));

if (numb1 > numb2 && numb1 > numb3 && numb1 > numb4 && numb1 > numb5) {
  console.log(`${numb1} is the largest number.`);
} else if (numb2 > numb1 && numb2 > numb3 && numb2 > numb4 && numb2 > numb5) {
  console.log(`${numb2} is the largest number.`);
} else if (numb3 > numb1 && numb3 > numb2 && numb3 > numb4 && numb3 >= numb5) {
  console.log(`${numb3} is the largest number.`);
} else if (numb4 > numb1 && numb4 > numb2 && numb4 > numb3 && numb4 > numb5) {
  console.log(`${numb4} is the largest number.`);
} else if (numb5 > numb1 && numb5 > numb2 && numb5 > numb3 && numb5 > numb4) {
  console.log(`${numb5} is the largest number.`);
} else {
  console.log(`They are all equal`);
}

// 4 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let num = 0; num < 15; num++) {
  if (num % 2 === 0) {
    console.log(num + " " + "is even");
  } else if (num % 2 !== 0) {
    console.log(num + " " + "is odd");
  }
}

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

const marks1 = Number(prompt("Enter the first mark:"));
const marks2 = Number(prompt("Enter the second mark:"));
const marks3 = Number(prompt("Enter the third mark:"));
const marks4 = Number(prompt("Enter the fourth mark:"));
const marks5 = Number(prompt("Enter the fifth mark:"));

const sum =
  marksOfSubject1 +
  marksOfSubject2 +
  marksOfSubject3 +
  marksOfSubject4 +
  marksOfSubject5;
const avg = sum / 5;

let grade;
if (avg < 60) {
  grade = "F";
} else if (avg < 70) {
  grade = "D";
} else if (avg < 80) {
  grade = "C";
} else if (avg < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log(`The average mark is ${avg} and the grade is ${grade}.`);

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (let num = 1; num < 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// **
// *
// * * *
// * * * *
// * * * * *

let n = 5;

for (let i = 0; i < n; i++) {
  let stars = " ";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}
