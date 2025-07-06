'use strict';

var priceOfPhone = 42000, bankBalance = 20000, creditLimit = 40000;

if (priceOfPhone < bankBalance) {
    console.log("all ok. process payment.")
} else if (priceOfPhone < creditLimit) {
    console.log("bank payment failed. credit card will be used.");
} else {
    console.log("sorry, you do not have sufficient funds.");
}

console.log("transaction over.");


var chocolate = "Toblerone", quantity;
switch(chocolate) {
    case "Dairy Milk":
        quantity = 5;
        break;
    case "Hersheys":
        quantity = 50;
        break;
    case "Toblerone":
        quantity = 1;
        break;
    default: 
        quantity = 2;
}

console.log(quantity)