// A string is immutable
var quote = "With great power comes great responsibility";

// substring()
var pieceOfTheQuote = quote.substring(10);
console.log(pieceOfTheQuote);
// Output: "ower comes great responsibility"

// replace()
var replacedString = quote.replace("responsibility", "electricity bill");
console.log(replacedString);
// Output: "With great power comes great electricity bill"
console.log(quote);
// Output: "With great power comes great responsibility"

// split()
var fruits = "apples,oranges,bananas";
var fruitsArray = fruits.split(",");
console.log(fruitsArray);

// Output: ["apples", "oranges", "bananas"]

var firstIndex = quote.indexOf("great");
var lastIndex = quote.lastIndexOf("great");
console.log(firstIndex);
console.log(lastIndex);
