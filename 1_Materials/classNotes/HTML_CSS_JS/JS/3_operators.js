// ===== OPERATORS =====

// Arithmetic
console.log(10 + 5, 10 - 5, 10 * 5, 10 / 2, 10 % 3);

// Assignment
let a = 10;
a += 5; // a = a + 5
console.log("Assignment:", a);

// Comparison
console.log(5 == "5"); // true (checks value)
console.log(5 === "5"); // false (checks value + type)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// Ternary operator
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");
