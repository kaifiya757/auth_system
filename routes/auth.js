const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Protected route
router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected data",
    user: req.user,
  });
});
