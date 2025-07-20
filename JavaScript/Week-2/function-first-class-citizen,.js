function foo(callback) {
  var x = 10,
    y = 20;
  var z = x + y;

  callback();
}

function bar() {
  console.log("bar called");
}
foo(bar);
