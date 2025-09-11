// ======================
// API CALL WITH AXIOS
// ======================

import axios from "axios";

// 1. Basic GET request
async function fetchPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("✅ Posts fetched:", response.data.slice(0, 3)); // first 3 posts
  } catch (error) {
    console.error("❌ Error fetching posts:", error.message);
  }
}

fetchPosts();

// 2. GET with query params
async function fetchUserPosts(userId) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: { userId },
      }
    );
    console.log(`✅ Posts by User ${userId}:`, response.data);
  } catch (error) {
    console.error("❌ Error fetching user posts:", error.message);
  }
}

fetchUserPosts(1);

// 3. POST request (creating new data)
async function createPost() {
  try {
    const newPost = {
      title: "Hello MERN ❤️",
      body: "This is a sample post using Axios.",
      userId: 1,
    };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    console.log("✅ New Post Created:", response.data);
  } catch (error) {
    console.error("❌ Error creating post:", error.message);
  }
}

createPost();

// 4. Handling multiple API calls with Promise.all
async function fetchUsersAndPosts() {
  try {
    const [users, posts] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ]);
    console.log("✅ Users:", users.data.length, "Posts:", posts.data.length);
  } catch (error) {
    console.error("❌ Error fetching users/posts:", error.message);
  }
}

fetchUsersAndPosts();
