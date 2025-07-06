var price = 30000, accountBalance = 25000, creditLimit = 3000;

if (price <= accountBalance) {
    console.log("I can buy the phone");
} else if (price <= accountBalance + creditLimit) {
    var extraNeeded = price - accountBalance;
    console.log("I can buy the phone now. Need to use " + extraNeeded + " from credit.");
} else {
    var leftAmount = price - accountBalance - creditLimit;
    console.log("I can't buy the phone. Still need " + leftAmount + " more.");
}