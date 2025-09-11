// ======================
// 1. CALLBACKS
// ======================

// Basic callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
// Output: Hello Alice  Goodbye!

// Callback with setTimeout (Async)
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
// Output: Start -> End -> This runs after 2 seconds

// Error-first callback style (Node.js pattern)
function fetchUser(id, callback) {
  if (id <= 0) {
    callback("❌ Invalid ID", null);
  } else {
    callback(null, { id: id, name: "Alice" });
  }
}

fetchUser(1, (err, user) => {
  if (err) console.log("Error:", err);
  else console.log("User found:", user);
});
// Output: User found: { id: 1, name: 'Alice' }

// ======================
// 2. PROMISES
// ======================

// A Promise represents a value that may be available now, later, or never
function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve("✅ Data fetched successfully");
      else reject("❌ Failed to fetch data");
    }, 1500);
  });
}

// Using .then() and .catch()
fetchData(true)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

fetchData(false)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// ======================
// 3. ASYNC / AWAIT
// ======================

// Cleaner way to handle promises
async function getData() {
  try {
    const data = await fetchData(true);
    console.log("Async/Await:", data);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

getData();

// ======================
// 4. PRACTICAL MERN EXAMPLE
// ======================

// Simulating MongoDB-style async operation
function findUserInDB(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin") {
        resolve({ username: "admin", role: "superuser" });
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

// Using async/await in an Express-like function
async function login(username) {
  try {
    const user = await findUserInDB(username);
    console.log("Login successful:", user);
  } catch (error) {
    console.error("Login failed:", error);
  }
}

login("admin"); // ✅ Works
login("guest"); // ❌ User not found
