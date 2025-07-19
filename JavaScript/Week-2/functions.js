// Function Declaration Syntax
function sum(x, y) {
  var result = x + y;
  return result;
}

var result = sum(12, 13);
console.log("result is ", result);

//Function Expression Syntax (Variable Declaration and Assignment)

var sum2 = function (x, y) {
  var result = x + y;
  return result;
};

console.log(sum2(13, 14));
