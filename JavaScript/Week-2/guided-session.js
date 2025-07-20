//Arrays

let fruits = ["apple", "banana", true, 5];
// arrays starts from 0, apple = 0, banana = 1, etc.

console.log(fruits[0]);
// prints the first index (0), which is apple, use square brackets to determain square bracket

fruits.push("orange");
console.log(fruits);
//push, inserts and element to array

fruits.pop();
console.log(fruits);
//pop, removes an element from an array, usually removes the last element, pop only removes last
//shift, unshift, slice, splice can remove specific

fruits[0] = "grapes";
console.log(fruits);
//modifies the index

//Objects

let obj = {
  name: "Abc",
  place: "India",
  getName: function () {},
  getPlace: function () {},
};
//using object literal {}

let obj1 = Object();

obj1.name = "Abc";
obj1.place = "efg";
//using object constructor

let obj2 = Object.create();

obj2.name = "";
obj2.getName = function () {};
//using object.create

console.log(obj.name);
//accessing the properties of an object = use dot operator . or bracket []

obj.age = 9;
console.log(obj.age);
//add properties

delete obj["age"];
console.log(obj);
//delete properties

//Functions

function findSum(a, b) {
  let sum = a + b;
  console.log(sum);
}
//declaration of a function - hoisting

findSum(2, 3);
//execute a function

let findSum = function (a, b) {
  let sum = a + b;
  console.log(sum);
};

findSum(2, 3);
//function expression

var result = (function () {
  var x = 10;
  var y = 20;
  return x + y;
})();

console.log(result);
//IIFE

function myFunc() {
  return "Hello";
}
let executeFunc = function (myFunc) {
  myFunc();
};
//pass function as argument

function myCode() {
  console.log("Hello");
}
let arr = [myCode, 1, true];
arr[0]();
//return function from another function
//anything we can do to an object, we can do to a fuction

function sum(x, y) {
  console.log("sum", this.num + this.num1 + x + y);
}

let obj = {
  num: 10,
  num1: 20,
};

sum.call(obj, 2, 3);
//call method. call method ensures that 'this' keyword inside a function points to obj

sum.apply(obj, [2, 3]);
//apply method

let boundFuction = sum.bind(obj);
boundFuction(2, 3);
//bind method

function sum(a, b) {
  return a + b;
}

let sum = (a, b) => a + b;
sum(2, 3);
//arrow function
