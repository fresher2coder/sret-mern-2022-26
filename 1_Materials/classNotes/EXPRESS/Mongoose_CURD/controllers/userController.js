import User from "../models/Users.js";

// @desc    Get all users
// @route   GET /api/users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new user
// @route   POST /api/users
export const createUser = async (req, res) => {
  const { name, age, address } = req.body;
  try {
    const user = new User({
      name,
      age,
      address,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update user
// @route   PUT /api/users/:id
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, age: req.body.age },
      { new: true }
    );
    if (updatedUser) res.json(updatedUser);
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) res.json({ message: "User deleted" });
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
