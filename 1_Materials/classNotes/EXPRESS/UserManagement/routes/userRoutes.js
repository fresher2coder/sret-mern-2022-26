// routes/userRoutes.js
import express from "express";
import { getProfile, getDashboard } from "../controllers/userController.js";
import { requireAuth } from "../middleware/auth.js";
import { requireRole } from "../middleware/roles.js";

const router = express.Router();

// All routes require authentication
router.get("/profile", requireAuth, getProfile);
router.get("/dashboard", requireAuth, getDashboard);

// Example of admin-only route
router.get("/admin/stats", requireAuth, requireRole("admin"), (req, res) => {
  res.json({ message: "Admin-only stats", uptime: process.uptime() });
});

export default router;
