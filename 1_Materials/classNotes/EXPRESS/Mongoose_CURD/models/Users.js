import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
