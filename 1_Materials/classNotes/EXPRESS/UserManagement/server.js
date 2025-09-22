import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRouters.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// rate limiter
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

// DB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes); // 👈 user routes

app.get("/", (req, res) => res.send("Auth + User API is running ✅"));

app.listen(process.env.PORT || 4000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 4000}`);
});
