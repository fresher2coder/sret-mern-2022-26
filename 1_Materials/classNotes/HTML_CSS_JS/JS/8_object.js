// ====================================
// 1. Creating & Accessing Objects
// ====================================
let user = {
  id: 101,
  name: "Dinesh",
  email: "dinesh@example.com",
  isAdmin: true,
};

// Access properties
console.log(user.name); // Dinesh (dot notation)
console.log(user["email"]); // dinesh@example.com (bracket notation)

// ====================================
// 2. Updating & Deleting Properties
// ====================================
// Update property
user.name = "Dinesh Kumar";

// Add new property
user.city = "Chennai";

// Delete property
delete user.isAdmin;

console.log("Updated User:", user);

// ====================================
// 3. Iterating Objects
// ====================================

// for...in
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// Object.keys
console.log("Keys:", Object.keys(user)); // ["id","name","email","city"]

// Object.values
console.log("Values:", Object.values(user));

// Object.entries
console.log("Entries:", Object.entries(user));

// ====================================
// 4. Object Methods
// ====================================

let person = {
  name: "Priya",
  greet: function () {
    return `Hello, I am ${this.name}`;
  },
};

console.log(person.greet()); // Hello, I am Priya

// Object.assign (merge objects)
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = Object.assign({}, obj1, obj2);
console.log("Merged:", merged); // {a:1, b:3, c:4}

// Spread operator (modern merge)
let merged2 = { ...obj1, ...obj2 };
console.log("Merged2:", merged2);

// ====================================
// 5. Nested Objects
// ====================================
let student = {
  id: 1,
  name: "Arjun",
  address: {
    city: "Bangalore",
    pincode: 560001,
  },
  subjects: ["Math", "Science", "English"],
};

console.log(student.address.city); // Bangalore
console.log(student.subjects[1]); // Science

// Optional chaining (ES2020)
console.log(student?.address?.pincode); // 560001

// ====================================
// 6. Real-world MERN Examples
// ====================================

// Example: MongoDB document (user)
let mongoUser = {
  _id: "64xy123",
  username: "arjun",
  email: "arjun@example.com",
  roles: ["user", "editor"],
  profile: {
    age: 24,
    location: "Mumbai",
  },
};

// ✅ Convert user object -> JSON (for API response)
let jsonResponse = JSON.stringify(mongoUser);
console.log("JSON Response:", jsonResponse);

// ✅ Parse JSON string back -> object (when API request comes in)
let parsedUser = JSON.parse(jsonResponse);
console.log("Parsed User:", parsedUser);

// ✅ Update nested property
parsedUser.profile.age = 25;
console.log("Updated Age:", parsedUser.profile.age);

// Example: Express.js response (sending object as JSON)
// res.json(mongoUser);   // in real backend

// Example: React state (object)
let state = { count: 0, theme: "light" };
// update using spread operator
let newState = { ...state, count: state.count + 1 };
console.log("Updated State:", newState);
