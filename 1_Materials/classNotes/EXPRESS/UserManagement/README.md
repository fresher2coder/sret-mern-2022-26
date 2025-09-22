📘 README – User Management API (Express + Mongoose + JWT)

🚀 Overview

This is a real-time style authentication and role-based access control system built with:

- Node.js + Express (backend framework)
- Mongoose (MongoDB ODM)
- JWT (JSON Web Tokens for authentication)
- bcryptjs (password hashing)

Features:

- Register (with hashed password)
- Login (get access + refresh tokens)
- Refresh token
- Logout (invalidate refresh token)
- Profile (protected)
- Dashboard (different views for user vs admin)
- Admin-only routes (RBAC – Role Based Access Control)

---

⚙️ Setup Instructions

1. Clone the project

   git clone <repo-url>
   cd user-management

2. Install dependencies

   npm install

3. Create a `.env` file

   env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/userdb
   JWT_ACCESS_SECRET=your_access_secret
   JWT_REFRESH_SECRET=your_refresh_secret

4. Start the server

   npm start

   > Server runs at `http://localhost:4000`

---

📦 API Endpoints

🔑 Auth Routes (`/api/auth`)

- POST `/register` → Register new user

  json
  {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123",
  "role": "user"
  }

- POST `/login` → Login and get tokens

  json
  {
  "email": "john@example.com",
  "password": "Password123"
  }

- POST `/refresh` → Get new access token using refresh token

- POST `/logout` → Logout and invalidate refresh token

---

👤 User Routes (`/api/user`)

(All require `Authorization: Bearer <ACCESS_TOKEN>`)

- GET `/profile` → Get user profile

- GET `/dashboard` → See role-based dashboard

  - User → posts, followers, etc.
  - Admin → total users, system stats, logs

- GET `/admin/stats` → Admin-only route

---

🔐 Role Based Access Control (RBAC)

- Every user has a `role` (`user` by default, `admin` if set).
- Middleware `requireRole("admin")` ensures only admins can access certain routes.
- Example:

  - Normal User → `profile`, `dashboard`
  - Admin → all above + `/admin/stats`

---

🧪 Testing with Postman

1. Import the Postman Collection JSON (provided in this repo).
2. Run `Register` → create a new user.
3. Run `Login` → copy the returned `accessToken`.
4. Go to collection variables → paste `accessToken`.
5. Now test Profile, Dashboard, Admin Stats routes.

---

🛡️ Security Notes

- Passwords are always hashed before saving.
- Access token expires fast (e.g., 15m).
- Refresh token used for new access tokens.
- Refresh tokens stored in DB → can be revoked on logout.

---

📚 Student Exercise

1. Extend registration so only an admin can create another admin.
2. Add a route `/api/user/settings` (accessible only to logged-in users).
3. Create a frontend (React or simple HTML+JS) that integrates with these APIs.
