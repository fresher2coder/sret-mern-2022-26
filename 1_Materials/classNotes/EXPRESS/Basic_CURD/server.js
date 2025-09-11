import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

//Base Route
app.use("/", (req, res) => {
  res.send("BackEnd Hits");
  //   res.json({ message: "BackEnd Hits" });
});

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
