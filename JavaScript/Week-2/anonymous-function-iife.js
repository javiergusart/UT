// Immediately Invoked Function Expression (IIFE)
(function () {
  var x = 100;

  const sum = function (x, y, cb) {
    var result = x + y;
    cb(result);
  };

  sum(10, 20, function (result) {
    console.log(result);
  });
})();
