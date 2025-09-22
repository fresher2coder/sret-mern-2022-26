// middleware/auth.js
import { verifyAccessToken } from "../utils/jwt.js";

export async function requireAuth(req, res, next) {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Missing or invalid authorization header" });
    }
    const token = auth.split(" ")[1];
    const payload = verifyAccessToken(token);
    // Attach user data to req
    req.user = payload;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ error: "Unauthorized", details: err.message });
  }
}
