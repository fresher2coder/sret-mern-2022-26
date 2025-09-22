// controllers/userController.js
import User from "../models/User.js";

// GET PROFILE
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-passwordHash -refreshTokens"
    );
    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json({ message: "Profile fetched", user });
  } catch (err) {
    console.error("getProfile err", err);
    return res
      .status(500)
      .json({ error: "Server error", details: err.message });
  }
};

// GET DASHBOARD
export const getDashboard = async (req, res) => {
  try {
    let data;

    if (req.user.role === "admin") {
      // Example: admin dashboard
      data = {
        totalUsers: await User.countDocuments(),
        systemHealth: "All systems operational",
        logs: ["User A logged in", "User B registered"],
      };
    } else {
      // Example: normal user dashboard
      data = {
        posts: 12,
        followers: 340,
        following: 180,
        lastLogin: new Date().toISOString(),
      };
    }

    return res.json({
      message: `${req.user.role} dashboard`,
      data,
    });
  } catch (err) {
    console.error("getDashboard err", err);
    return res
      .status(500)
      .json({ error: "Server error", details: err.message });
  }
};
