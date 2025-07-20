function greet(message, name) {
  console.log(this);
  console.log(message + " " + name + "!");
}

greet("good morning", "john");

console.log(greet instanceof Object);
