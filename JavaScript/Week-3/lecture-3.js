const numArr = [1, 4, 10, 100];
const myName = "Felipe";

numArr.includes();
console.log(numArr.includes(100));

console.log(numArr.find((num) => num < 100));

console.log(numArr.find((num) => num < 100));

console.log(numArr.slice());

// with slice we don't modify the original arr and the end index is not included in return.
const copyNum = numArr.slice(0, 2);

// with slice we don't modify the original arr and the end index is not included in return.
const copyNum2 = numArr.slice(0, 2);

// this is the comparer function to sort asc
numArr.sort((a, b) => a - b);

// this is the comparer function to sort desc
numArr.sort((a, b) => b - a);

// fyi to create a deep copy let's practice one way using JSON functions
var copyNestedDeep = JSON.parse(JSON.stringify(nestedArr));

// if we wanted to find the last char for the string we use myName.length - 1
myName.charAt(myName.length - 1);

var myNameString = myName.concat(" ", "is my name");

myNameString.split();
myNameArr.join(" ");

myNameString.includes("name");
myNameString.lastIndexOf("e");

myNameString.substring(0, 6);
myNameString.slice(0, 6);

myNameString.replace("nice", "great");
myNameString.replaceAll("i", "o");

const myNameStringTrimmed = myNameString.trim();

myNameStringTrimmed.toUpperCase();
myNameStringTrimmed.toLowerCase();

// use spread operator (...) to pass a declared arr to Math fn.
Math.min(...numArr);

Math.max(...numArr);
Math.min(100, 20, -1);
Math.ceil(10.6);
Math.floor(10.6);
// exponentiation x ^ x
Math.pow(2, 3);
