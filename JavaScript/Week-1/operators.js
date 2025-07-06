// arithmetic operators = + - / %
console.log(10+20);
console.log(20-35);

var x = 12, y = 13;
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);





// relational operators
var isBefore = "hello" < "hi";
console.log(isBefore);

isBefore = "hello" > "hi";
console.log(isBefore);

var isGreater = 10 > 9;
console.log(isGreater);

console.log(x<=y);
console.log(x>=y);
console.log(x==y);
console.log(x!=y);

console.log(1 == "1"); // type unsafe equality operator
console.log(1 === "1"); // type safe equality operator


// logical operators
var isRaining = true, goingByWalk = true, goingByCar = false;
var takeUmbrealla = isRaining && goingByWalk;
console.log(takeUmbrealla);

var priceOfPhone = 42000, bankBalance = 20000, friendBankbalance = 80000, amIInterested = true;
var willIBuyPhone = priceOfPhone < bankBalance && amIInterested;
console.log(willIBuyPhone);

console.log(priceOfPhone < bankBalance || priceOfPhone < friendBankbalance);

console.log(!isRaining)



// miscellanaeous operators
var name = "John", message = "Good morning";
console.log(message + " " + name);

console.log(0.1/0.2);


console.log(typeof isRaining); //type off is misc.

var city = "Bangalore";
var isTrafficHuge = city === "Bangalore" ? "Yes" : "No";
console.log(isTrafficHuge);

console.log(1+2+3*4);

console.log(1+(2+3)*4);