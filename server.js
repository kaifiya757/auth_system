const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Test route (optional but useful)
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});