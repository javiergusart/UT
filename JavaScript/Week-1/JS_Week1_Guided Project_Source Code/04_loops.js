// 1. Write a JavaScript program that prints the numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Write a JavaScript program that calculates the sum of all numbers from 1 to a given number using a while loop.
let num = 5;
let sum = 0;
let i = 1;

while (i <= num) {
  sum += i; // sum = summ + 1; accumulator
  i++;
}
console.log("The sum of all number from 1 to " + num + " is:", sum);

// 3. Write a JavaScript program that prints the even numbers from 1 to 20 using a do-while loop.
let count = 1;

do {
  if (count % 2 === 0) {
    console.log(count);
  }
  count++;
} while (count <= 20);

// 4. Write a JavaScript program that prints the numbers from 10 to 0 using a for loop.
console.log("script 4");
for (let j = 10; j >= 0; j--) {
  console.log(j);
}

// 5. Write a JavaScript program that prints the alternating numbers from 1 to 10 using a for loop.
console.log("script 5");
let step = 2;

for (let k = 1; k <= 10; k += step) {
  console.log(k);
}
