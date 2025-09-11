// ====================================
// 1. Creating Arrays
// ====================================
let fruits = ["apple", "banana", "mango"]; // string array
let numbers = [10, 20, 30, 40]; // number array
let mixed = [1, "hello", true, { id: 1 }, [5, 6]]; // mixed types

console.log("Fruits:", fruits[0]); // apple
console.log("Numbers:", numbers[2]); // 30
console.log("Mixed:", mixed[3].id); // 1

// ====================================
// 2. Adding & Removing Elements
// ====================================
fruits.push("orange"); // add at end
fruits.unshift("kiwi"); // add at start
console.log("After push & unshift:", fruits);

fruits.pop(); // remove last
fruits.shift(); // remove first
console.log("After pop & shift:", fruits);

// splice(index, deleteCount, ...items)
fruits.splice(1, 1, "grapes");
console.log("After splice:", fruits);

// slice(start, end) - returns new array
let sliced = fruits.slice(0, 2);
console.log("Sliced:", sliced);

// ====================================
// 3. Iterating over Arrays
// ====================================
// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("For loop:", numbers[i]);
}

// forEach
numbers.forEach((n) => console.log("forEach:", n));

// map (returns new array)
let squares = numbers.map((n) => n * n);
console.log("Squares:", squares);

// ====================================
// 4. Common Array Methods
// ====================================
// filter
let evens = numbers.filter((n) => n % 2 === 0);
console.log("Even numbers:", evens);

// reduce
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum of numbers:", sum);

// find
let found = numbers.find((n) => n > 15);
console.log("First number > 15:", found);

// includes
console.log("Includes 20?", numbers.includes(20));

// sort
let unsorted = [5, 1, 10, 3];
unsorted.sort((a, b) => a - b); // ascending
console.log("Sorted Asc:", unsorted);

// reverse
unsorted.reverse();
console.log("Reversed:", unsorted);

// ====================================
// 5. Real-world MERN Examples
// ====================================

// Example: Filtering API response (products)
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 },
];

// Get all product names (map)
let productNames = products.map((p) => p.name);
console.log("Product Names:", productNames);

// Get products above 25k (filter)
let expensive = products.filter((p) => p.price > 25000);
console.log("Expensive Products:", expensive);

// Get total value (reduce)
let totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total Price:", totalPrice);

// Convert products array -> object {id: product}
let productObj = {};
products.forEach((p) => (productObj[p.id] = p));
console.log("Product Object:", productObj);

// ====================================
// End of Array Examples
// ====================================
