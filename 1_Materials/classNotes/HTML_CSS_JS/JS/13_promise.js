// ======================
// MULTIPLE PROMISE HANDLING
// ======================

// Simulated async tasks
const fetchUsers = new Promise((resolve) => {
  setTimeout(() => resolve("✅ Users fetched"), 1000);
});

const fetchPosts = new Promise((resolve) => {
  setTimeout(() => resolve("✅ Posts fetched"), 2000);
});

const fetchComments = new Promise((resolve, reject) => {
  setTimeout(() => reject("❌ Failed to fetch comments"), 1500);
});

// 1. Promise.all → waits for ALL to succeed (fails if one fails)
Promise.all([fetchUsers, fetchPosts])
  .then((results) => console.log("Promise.all:", results))
  .catch((err) => console.error("Promise.all Error:", err));
// Output after 2s: [ '✅ Users fetched', '✅ Posts fetched' ]

Promise.all([fetchUsers, fetchComments])
  .then((results) => console.log("Promise.all:", results))
  .catch((err) => console.error("Promise.all Error:", err));
// Output after 1.5s: ❌ Failed to fetch comments

// 2. Promise.allSettled → waits for ALL, never fails (returns status)
Promise.allSettled([fetchUsers, fetchPosts, fetchComments]).then((results) =>
  console.log("Promise.allSettled:", results)
);
/*
Output:
[
  { status: 'fulfilled', value: '✅ Users fetched' },
  { status: 'fulfilled', value: '✅ Posts fetched' },
  { status: 'rejected', reason: '❌ Failed to fetch comments' }
]
*/

// 3. Promise.race → returns first resolved/rejected
Promise.race([fetchUsers, fetchPosts, fetchComments])
  .then((result) => console.log("Promise.race:", result))
  .catch((err) => console.error("Promise.race Error:", err));
// Output after 1s: ✅ Users fetched  (fastest one wins)

// 4. Promise.any → returns first SUCCESS, ignores failures
Promise.any([fetchComments, fetchPosts, fetchUsers])
  .then((result) => console.log("Promise.any:", result))
  .catch((err) => console.error("Promise.any Error:", err));
// Output after 1s: ✅ Users fetched (first success)

/*
api -> single promise
2000 - 2025

url/2000 -> promise1
url/2004 -> promise2
url/2008 -> promise3 
......
url/2024 -> promisen

ui
*/
