var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

days.sort();
days.reverse();
console.log(days);

console.log(days.indexOf("Monday")); // 3

var numbers = [20, 60, 40, 65, 80, 8, 22, 30, 200, 2, 3500];

numbers.sort(function (x, y) {
  return x - y;
});
console.log(numbers);
