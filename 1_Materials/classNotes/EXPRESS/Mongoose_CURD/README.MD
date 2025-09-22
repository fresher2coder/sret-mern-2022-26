📘 README – Express + Mongoose Starter

🚀 Overview

This project is a starter template for building Node.js backend applications using:

- Express.js – Web framework for Node.js
- Mongoose – ODM (Object Data Modeling) library for MongoDB

Features included:

- MongoDB connection with Mongoose
- Basic Express server setup
- REST API endpoints with CRUD operations
- User model as an example

---

⚙️ Setup Instructions

1. Clone the project

   git clone <repo-url>
   cd express-mongoose-starter

2. Install dependencies

   npm install

3. Create `.env` file

   env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/testdb

4. Start the server

   npm start

   > Server runs at `http://localhost:4000`

---

📦 Project Structure

express-mongoose-starter/
│── models/
│ └── User.js User schema & model
│── routes/
│ └── userRoutes.js Routes for user APIs
│── controllers/
│ └── userController.js Controller functions
│── server.js Express app entry point
│── .env Environment variables
│── package.json

---

📦 Example User Model (`models/User.js`)

js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name: { type: String, required: true, trim: true },
email: { type: String, required: true, unique: true },
age: { type: Number, default: 18 }
}, { timestamps: true });

export default mongoose.model("User", userSchema);

---

🌐 API Endpoints (CRUD)

Create User

POST `/api/users`

json
{
"name": "John Doe",
"email": "john@example.com",
"age": 25
}

Get All Users

GET `/api/users`

Get Single User

GET `/api/users/:id`

Update User

PUT `/api/users/:id`

json
{
"name": "John Updated",
"age": 26
}

Delete User

DELETE `/api/users/:id`

---

🧪 Testing with Postman

1. Import the API endpoints manually or create a new collection.
2. Try `POST /api/users` to add new users.
3. Try `GET /api/users` to fetch all users.
4. Try `PUT` and `DELETE` with a user’s ID.

---

📚 Student Exercise

1. Add more fields to the User model (e.g., `phone`, `address`).
2. Create another model (e.g., `Product`) and write CRUD APIs for it.
3. Add query filters to `GET /api/users` (e.g., fetch users by age or name).
