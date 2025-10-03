// controllers/authController.js
import bcrypt from "bcrypt";
import crypto from "crypto";
import validator from "validator";
import User from "../models/User.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt.js";

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || "12");

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

// REGISTER
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "name, email, password required" });

    if (!validator.isEmail(email))
      return res.status(400).json({ error: "Invalid email" });

    if (password.length < 6)
      return res.status(400).json({ error: "Password must be >= 6 chars" });

    const existing = await User.findOne({ email }); //User.find()

    if (existing)
      return res.status(409).json({ error: "Email already in use" });

    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await User.create({ name, email, passwordHash });

    // inside register and login
    const accessToken = signAccessToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });
    const refreshToken = signRefreshToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    user.refreshTokens.push({ token: hashToken(refreshToken) });
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === "true",
      sameSite: process.env.COOKIE_SAME_SITE || "Strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(201).json({
      message: "User created",
      user: { id: user._id, name: user.name, email: user.email },
      accessToken,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Server error", details: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    // inside register and login
    const accessToken = signAccessToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });
    const refreshToken = signRefreshToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    user.refreshTokens.push({ token: hashToken(refreshToken) });
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === "true",
      sameSite: process.env.COOKIE_SAME_SITE || "Strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.json({ message: "Logged in", accessToken });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Server error", details: err.message });
  }
};

// REFRESH
export const refresh = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ error: "No refresh token" });

    const payload = verifyRefreshToken(token);
    const user = await User.findById(payload.id);
    if (!user)
      return res
        .status(401)
        .json({ error: "Invalid refresh token (user not found)" });

    const hashed = hashToken(token);
    const found = user.refreshTokens.find((r) => r.token === hashed);
    if (!found)
      return res.status(401).json({ error: "Refresh token not recognized" });

    user.refreshTokens = user.refreshTokens.filter((r) => r.token !== hashed);

    const newRefreshToken = signRefreshToken({
      id: user._id,
      email: user.email,
    });
    user.refreshTokens.push({ token: hashToken(newRefreshToken) });
    await user.save();

    const newAccess = signAccessToken({ id: user._id, email: user.email });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === "true",
      sameSite: process.env.COOKIE_SAME_SITE || "Strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.json({ accessToken: newAccess });
  } catch (err) {
    console.error("refresh err", err);
    return res
      .status(401)
      .json({ error: "Invalid refresh token", details: err.message });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (token) {
      const payload = verifyRefreshToken(token);
      const user = await User.findById(payload.id);
      if (user) {
        const hashed = hashToken(token);
        user.refreshTokens = user.refreshTokens.filter(
          (r) => r.token !== hashed
        );
        await user.save();
      }
    }
    res.clearCookie("refreshToken");
    return res.json({ message: "Logged out" });
  } catch (err) {
    console.error("logout err", err);
    res.clearCookie("refreshToken");
    return res
      .status(200)
      .json({ message: "Logged out (partial)", details: err.message });
  }
};
