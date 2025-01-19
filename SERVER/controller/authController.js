import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    if (!user.password) {
      return res
        .status(500)
        .json({ success: false, error: "Password field missing in user data" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid password" });
    }

    if (!process.env.JWT_KEY) {
      return res
        .status(500)
        .json({ success: false, error: "JWT key not configured in server" });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );

    res.status(200).json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export default login;
