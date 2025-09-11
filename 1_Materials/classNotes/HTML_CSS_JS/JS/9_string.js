// ====================================
// 1. Creating Strings
// ====================================
let str1 = "Hello"; // double quotes
let str2 = "World"; // single quotes
let str3 = `JS Rocks`; // backticks (template literals)

console.log(str1, str2, str3);

// ====================================
// 2. Accessing Characters
// ====================================
let text = "JavaScript";
console.log(text[0]); // J
console.log(text.charAt(4)); // S
console.log(text.length); // 10

// ====================================
// 3. String Methods (Case Conversion)
// ====================================
console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text.toLowerCase()); // javascript

// ====================================
// 4. Searching & Extracting
// ====================================
let message = "hello world";

// indexOf / lastIndexOf
console.log(message.indexOf("o")); // 4
console.log(message.lastIndexOf("o")); // 7

// includes
console.log(message.includes("world")); // true

// startsWith / endsWith
console.log(message.startsWith("he")); // true
console.log(message.endsWith("ld")); // true

// slice
console.log(message.slice(0, 5)); // hello

// substring
console.log(message.substring(6, 11)); // world

// ====================================
// 5. Modifying Strings
// ====================================
let messy = "   MERN stack   ";

// trim
console.log(messy.trim()); // "MERN stack"

// replace
let sentence = "I love Java";
console.log(sentence.replace("Java", "JavaScript")); // I love JavaScript

// split -> array
let csv = "apple,banana,grape";
console.log(csv.split(",")); // ["apple","banana","grape"]

// repeat
console.log("ha".repeat(3)); // hahaha

// ====================================
// 6. Template Literals (Backticks)
// ====================================
let name = "Dinesh";
let course = "MERN";

let greeting = `Hello ${name}, welcome to the ${course} stack training!`;
console.log(greeting);

// Multi-line string
let multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// ====================================
// 7. Real-world MERN Examples
// ====================================

// Example: Cleaning user input
let username = "   arjun   ";
let cleanName = username.trim();
console.log("Clean Name:", cleanName); // "arjun"

// Example: Capitalizing first letter (for UI display)
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("mongodb")); // Mongodb

// Example: Creating dynamic API response message
let user = { name: "Priya", role: "Admin" };
let apiMessage = `Welcome ${user.name}, you are logged in as ${user.role}`;
console.log(apiMessage);

// Example: Splitting query parameters (Node.js)
let query = "search=react&page=2";
let params = {};
query.split("&").forEach((p) => {
  let [key, value] = p.split("=");
  params[key] = value;
});
console.log("Query Params:", params);
// { search: "react", page: "2" }
