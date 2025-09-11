import express from "express";
import users from "../data/users.js";

const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET user by ID
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

// POST new user
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// DELETE user
router.delete("/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export default router;
