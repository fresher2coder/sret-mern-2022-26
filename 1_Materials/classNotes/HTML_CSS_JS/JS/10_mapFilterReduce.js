// Suppose we fetched users from MongoDB
let users = [
  { name: "Arjun", age: 20 },
  { name: "Priya", age: 25 },
  { name: "Vikram", age: 30 },
];

// 1. Use map to extract names
let names = users.map((user) => user.name);
console.log("Names:", names); // ["Arjun","Priya","Vikram"]

// 2. Use filter to get users age > 22
let adults = users.filter((user) => user.age > 22);
console.log("Adults:", adults);

// 3. Use reduce to calculate total age
let totalAge = users.reduce((sum, u) => sum + u.age, 0);
console.log("Total Age:", totalAge); // 75

// 4. Use spread to add new user without mutating
let newUser = { name: "Kavya", age: 28 };
let updatedUsers = [...users, newUser];
console.log("Updated Users:", updatedUsers);

// 5. Arrow functions for Express (API route)
const getUsers = (req, res) => {
  res.json(updatedUsers);
};

// Imagine in Express: app.get("/users", getUsers);
