import express from "express";
import login from "../controller/authController.js"; // Ensure `login` is exported properly from the controller

const router = express.Router();

// Corrected route path
router.post("/login", login);

export default router;
