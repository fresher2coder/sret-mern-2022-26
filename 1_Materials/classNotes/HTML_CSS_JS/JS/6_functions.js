// ===== FUNCTIONS & ARGUMENTS =====

// Simple function
function greet(name) {
  console.log("Hello", name);
}
greet("Dinesh");

// Default arguments
function greetUser(name = "Guest") {
  console.log("Hi", name);
}
greetUser();
greetUser("Maya");

// Rest arguments
function sum(...numbers) {
  console.log("Numbers:", numbers);
  let total = numbers.reduce((acc, val) => acc + val, 0);
  console.log("Sum =", total);
}
sum(10, 20, 30, 40);

// Arguments object (old way)
function showArgs() {
  console.log("Arguments object:", arguments);
}
showArgs(1, "hello", true);

// Named arguments (via object destructuring)
function createUser({ name, age, city }) {
  console.log(`User ${name}, ${age} years old from ${city}`);
}
createUser({ name: "Dinesh", age: 34, city: "Chennai" });

// Callback as argument
function calculate(a, b, operation) {
  return operation(a, b);
}
console.log(
  "Addition:",
  calculate(5, 3, (x, y) => x + y)
);
console.log(
  "Multiplication:",
  calculate(5, 3, (x, y) => x * y)
);
