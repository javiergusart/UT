// 1. Write a program that determines the type of triangle based on the lengths of its sides (`side1`, `side2`, and `side3`).
// The types of triangles are equilateral, isosceles, and scalene.

var side1 = 5;
var side2 = 5;
var side3 = 8;
var triangleType;

if (side1 === side2 && side2 === side3) {
  triangleType = "Equilateral";
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  triangleType = "Isosceles";
} else {
  triangleType = "Scalene";
}

console.log("Triangle type:", triangleType);

// 2. Use a for loop to print the square of numbers from 1 to 10.

for (var i = 1; i <= 10; i++) {
  console.log("Square of", i, "is", i * i);
}

// 3. Write a code that simulates access control to a restricted area.
// If a user is an administrator (isAdmin is true) and their age is 18 or older (age >= 18),
// they have access. Otherwise, access is denied.

var isAdmin = true;
var age = 20;

if (isAdmin === true && age >= 18) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 4. // 4. Write a program to calculate the sum of the first `n` natural numbers using a while loop.
var n = 15;
var sum = 0;
var i = 1;

console.log("Sum of first " + n + " natural numbers: ");

while (i <= n) {
  sum = sum + i;
  i++;
}

console.log(sum);

// 5. Write a program to calculate the factorial of a given number using any loop.

var num = 5;
var factorial = 1;

for (var i = 1; i <= num; i++) {
  factorial = factorial * i;
}

console.log("Factorial of", num, "is", factorial);
