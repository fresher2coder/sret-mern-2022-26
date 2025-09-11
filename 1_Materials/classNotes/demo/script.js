// //promise

// const promise = new Promise((resolve, reject) => {
//   //res & ref - CB

//   let love = true;
//   if (love) resolve("143");
//   else reject("Broken Heart");
// });

// promise
//   .then((data) => {
//     console.log("Marriage", data);
//     return Number(data);
//   })
//   .then((data) => {
//     data = data + 1;
//     console.log("Marriage", data);
//   })
//   .catch((err) => {
//     console.log("Break UP", err);
//   });

//fetch->headers, status, json to string / axios
//install import use

import axios from "axios";
const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

// fetchPosts();

const createPost = async () => {
  const newPost = {
    userId: 12,
    title: "javascript",
    body: "its single thread app",
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  console.log(response.data);
};

createPost();
