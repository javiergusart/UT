var today = new Date();
console.log(today);

var milleniumStart = new Date(2000, 0, 1);
console.log(milleniumStart);

today.setDate(today.getDate() + 1);
console.log(today);

var July31 = new Date(2020, 6, 31);
console.log(July31);

//getters

console.log(July31.getMonth());
console.log(July31.getDay());

//setters

var today = new Date();
console.log(today);
today.setDate(9);
console.log(today);
today.setFullYear(2018);
console.log(today);

console.log(today.toDateString);
