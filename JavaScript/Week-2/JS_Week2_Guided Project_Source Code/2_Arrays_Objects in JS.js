// 1. Create a variable `favoriteFruits` and assign it an array of strings representing your favorite fruits.

console.log("\n-------------------------------------------------\n");

// 2. Create a variable `mixedArray` that contains a mix of data types, including numbers, strings, and booleans.

console.log("\n-------------------------------------------------\n");

// 3. Write a program that iterates through each number of an array using for..of loop and computes the sum of squares of each of these numbers.

var arr = [10, 15, 34, 20];
let sum = 0;
for (let num of arr) {
  //for .. of loop
  sum += num * num;
}
console.log(sum);

console.log("\n-------------------------------------------------\n");

// 4. Write a program to find maximum number in a numeric array.

var arr = [10, 15, 34, 20];
var max = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

console.log("\n-------------------------------------------------\n");

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// 5. Declare an object named "person" with properties "name", "age", and "city" and set their respective values to
// "John", 30, "New York" and hobbies as "reading", "swimming", "traveling". Print the name, age, and city of the person.

var person = {
  name: "John",
  age: 30,
  city: "New York",
  hobby: ["reading", "swimming", "traveling"],
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.hobby);
console.log("\n-------------------------------------------------\n");

// 6. Declare an object named "employee" with properties "name", "age", and "city". Delete the "city" property from the object.

var employee = {
  name: "John",
  age: 30,
  city: "San Francisco",
};

delete employee.city;

console.log(employee);

console.log("\n-------------------------------------------------\n");

// 7. Declare an object named "toy" with an empty object as its initial value.
// Add the properties "name" and "category" with values "Super Space Rocket" and "Action Figures & Playsets" respectively.

var toy = {}; //Object literal
toy.name = "Super Space Rocket";
toy.category = "Action Figures & Playsets";
console.log(toy);

console.log("\n-------------------------------------------------\n");

// 8. Write a program to create an array of objects "employees" with properties "name", "age", and "city" and set their respective values to
// "John", 30, "New York", "Thomas", 40, "Chicago", "Lily", 35, "San Francisco". Print the name, age, and city of each employee.
// Print the name, age, and city of each employee using for..of loop.

console.log("\n-------------------------------------------------\n");

// 9. Write a program to reverse an array

console.log("\n-------------------------------------------------\n");

// 1. favoriteFruits array
const favoriteFruits = ["Mango", "Strawberry", "Pineapple"];
console.log("1. Favorite Fruits:", favoriteFruits);

console.log("\n-------------------------------------------------\n");

// 2. mixedArray with different data types
const mixedArray = [42, "Hello", true, 3.14, "World", false];
console.log("2. Mixed Array:", mixedArray);

console.log("\n-------------------------------------------------\n");

// 3. Sum of squares
const numbers = [1, 2, 3, 4, 5];
let sumOfSquares = 0;
for (let num of numbers) {
  sumOfSquares += num * num;
}
console.log("3. Sum of squares:", sumOfSquares);

console.log("\n-------------------------------------------------\n");

// 4. Find max in array
const numArray = [12, 35, 7, 64, 28];
let max = numArray[0];
for (let num of numArray) {
  if (num > max) max = num;
}
console.log("4. Max number:", max);

console.log("\n-------------------------------------------------\n");

// 5. person object
const person = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "swimming", "traveling"],
};
console.log(
  `5. Person - Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
);

console.log("\n-------------------------------------------------\n");

// 6. employee object with delete
const employee = {
  name: "Alice",
  age: 25,
  city: "Los Angeles",
};
delete employee.city;
console.log("6. Employee after deleting city:", employee);

console.log("\n-------------------------------------------------\n");

// 7. toy object creation
const toy = {};
toy.name = "Super Space Rocket";
toy.category = "Action Figures & Playsets";
console.log("7. Toy Object:", toy);

console.log("\n-------------------------------------------------\n");

// 8. employees array of objects + for..of loop
const employees = [
  { name: "John", age: 30, city: "New York" },
  { name: "Thomas", age: 40, city: "Chicago" },
  { name: "Lily", age: 35, city: "San Francisco" },
];

console.log("8. Employee Details:");
for (let emp of employees) {
  console.log(`Name: ${emp.name}, Age: ${emp.age}, City: ${emp.city}`);
}

console.log("\n-------------------------------------------------\n");

// 9. Reverse an array
const originalArray = [10, 20, 30, 40, 50];
const reversedArray = originalArray.slice().reverse();
console.log("9. Reversed Array:", reversedArray);

console.log("\n-------------------------------------------------\n");
