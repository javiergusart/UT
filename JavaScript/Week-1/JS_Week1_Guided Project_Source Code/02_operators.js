// 1. Write a JavaScript expression to calculate the sum of two numbers, `num1` and `num2`.
let num1 = 7;
let num2 = 6;
let sum = num1 + num2;
console.log(sum);

// 2. Write a program to calculate the area of a rectangle given its length and width.
let length = 5;
let width = 8;
let area = length * width;
console.log("The rectangle area is:", area);

// 3. Write a program to calculate the remainder when a given number, `dividend`, is divided by another number, `divisor`.
let divided = 12;
let divisor = 5;
let remainder = divided % divisor;
console.log("The remainder is:", remainder);

// 4. Write a program to increment a variable, `count`, by 1.
let count = 4;
count++;
console.log("The result increment is:", count);

// 5. Write a program to concatenate two strings, `str1` and `str2`, using the concatenation operator (+).
let str1 = "Hello";
let str2 = "World";
let concatenate = str1 + " " + str2;
console.log(concatenate);

// 6. Write a program to negate a boolean value, `isTrue`.
let isTrue = true;
let isNegated = !isTrue;
console.log("isTrue = ", isNegated);

// 7. Write a program to check if a given number, `num`, is between 10 and 20 (inclusive).
let num = 13;
let isBetween = num >= 10 && num <= 20;
console.log("Is between 10 and 20?:", isBetween);

// 8. Write a program to check if a person is eligible for a discount based on the age (`age`) and membership status (`isMember`). The discount is applicable if the person is at least 60 years old or is a member.
let age = 35;
let isMember = true;
let isEligible = age >= 60 || isMember;
console.log("Is Eligible?", isEligible);

// 9. Write a program to check if a given number, `num`, is not equal to 0.
let num5 = 3;
let isNotZero = num5 !== 0;
console.log("Is not zero?:", isNotZero);

// 10. Write a program to check if a student is eligible for a scholarship based on their grade (`grade`) and attendance (`attendance`). The student is eligible if their grade is at least 90 or their attendance is at least 95%.
let grade = 80;
let attendance = 94;
let scholarship = grade >= 90 || attendance >= 95;
console.log("Scholarship?", scholarship);

// 11. Write a program to check if a given string, `str`, is either "apple" or "banana".
let str = "grape";
let isFruit = str === "apple" || str === "banana";
console.log("Is apple or banana?:", isFruit);

// 12. Write a program to check if a given number, `num`, is both positive and even.
let num6 = 7;
let isPositiveAndEven = num > 0 && num6 % 2 === 0;
console.log("Is positive and even?:", isPositiveAndEven);

// 13. Write a program to check if a person is eligible to vote based on their age (`age`) and citizenship (`isCitizen`). The person is eligible if they are at least 18 years old and a citizen.
let personAge = 17;
let citizen = true;
let isEligibleToVote = personAge >= 18 && citizen;
console.log("Is eligible to vote?:", isEligibleToVote);

// 14. Write a program to check if a given number `num` is out of range of 0 and 100, is either less than 0 or greater than 100.
let numRange = 77;
let isOutOfRange = numRange < 0 || numRange > 100;
console.log("Is out of range?:", isOutOfRange);

// 15. Write a program to swap 2 numbers
let value1 = 4;
let value2 = 10;
console.log("Before swapping:");
console.log("Value 1: ", value1);
console.log("Value 2: ", value2);

let temp = value1;
value1 = value2;
value = temp;

console.log("After swapping:");
console.log("Value 1: ", value1);
console.log("Value 2: ", value2);
