import users from "../data/users.js";

// @desc    Get all users
export const getUsers = (req, res) => {
  res.json(users);
};

// @desc    Get user by ID
export const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

// @desc    Create new user
export const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

// @desc    Update user
export const updateUser = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// @desc    Delete user
export const deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
