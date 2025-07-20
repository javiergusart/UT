// Question 1: Anonymous Function
// Write an anonymous function that takes two numbers as parameters and returns their sum.

var sum = function (a, b) {
  return a + b;
};
console.log(sum(3, 4));

console.log("\n-------------------------------------------------\n");

// 2. Write a function `isEven` that takes a number as a parameter and returns `true` if it is even, and `false` otherwise.
function isEven(n) {
  return n % 2 === 0;
}
console.log("2. Is 4 even?", isEven(4));
console.log("2. Is 7 even?", isEven(7));

console.log("\n-------------------------------------------------\n");

// 3. Implement a function that checks if a given number is a palindrome (e.g., 121, 1331).
function isPalindrome(num) {
  const str = num.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("3. Is 121 palindrome?", isPalindrome(121));
console.log("3. Is 123 palindrome?", isPalindrome(123));

console.log("\n-------------------------------------------------\n");

// 4. Scope - Global and Local
// Write a function that demonstrates the concept of global and local scope. The function should have a local variable and a global variable, and it should print their values.
var globalVariable = "IAM GLOBAL";

function scopeDemo() {
  var localVariable = "IAM LOCAL";
  console.log(localVariable);
  console.log(globalVariable);
}
scopeDemo();
console.log("\n-------------------------------------------------\n");

// 5. Anonymous Function as a Parameter
// Write a function that takes an anonymous function as a parameter and invokes it.
function highOrderFunction(cb) {
  cb();
}

highOrderFunction(function () {
  console.log("Anonymous function is calledd");
});
console.log("\n-------------------------------------------------\n");

// 6.  IIFE Returning a Value
// Write an IIFE that returns the square of a number and assign the result to a variable.
var number = 10;
var square = (function (num) {
  return num * num;
})(number);

console.log(square);
console.log("\n-------------------------------------------------\n");

// 7. Arrow functions
// Define an arrow function that returns the cube of a number and assign the returned value to a variable.
var cube = (number) => number * number * number;

console.log(cube(4));
console.log("\n-------------------------------------------------\n");

// 8. Arrow Function
// Write a function to print a right angle triangle of stars. Use arrow function which takes a number as a parameter that represents the number of lines in the triangle.
var rightAngleTriangle = (num) => {
  var str = "";

  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};
console.log(rightAngleTriangle(5));
console.log("\n-------------------------------------------------\n");

// 1. Anonymous Function (sum of two numbers)
const sum = function (a, b) {
  return a + b;
};
console.log("1. Sum (anonymous):", sum(5, 3));

console.log("\n-------------------------------------------------\n");

// 2. isEven function
function isEven(n) {
  return n % 2 === 0;
}
console.log("2. Is 4 even?", isEven(4));
console.log("2. Is 7 even?", isEven(7));

console.log("\n-------------------------------------------------\n");

// 3. Palindrome check
function isPalindrome(num) {
  const str = num.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("3. Is 121 palindrome?", isPalindrome(121));
console.log("3. Is 123 palindrome?", isPalindrome(123));

console.log("\n-------------------------------------------------\n");

// 4. Scope - Global and Local
let globalVar = "I am global";
function demonstrateScope() {
  let localVar = "I am local";
  console.log("4. Global:", globalVar);
  console.log("4. Local:", localVar);
}
demonstrateScope();

console.log("\n-------------------------------------------------\n");

// 5. Anonymous Function as a Parameter
function runCallback(callback) {
  callback();
}
runCallback(function () {
  console.log("5. Anonymous function called!");
});

console.log("\n-------------------------------------------------\n");

// 6. IIFE Returning a Value
const square = (function (num) {
  return num * num;
})(6);
console.log("6. Square using IIFE:", square);

console.log("\n-------------------------------------------------\n");

// 7. Arrow Function to
