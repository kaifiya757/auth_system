const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];  // ✅ inside function

  if (!authHeader) {
    return res.status(403).json("No token provided");
  }

  const token = authHeader.split(" ")[1];  // ✅ inside function

  if (!token) {
    return res.status(403).json("Token format wrong");
  }

  try {
    const verified = jwt.verify(token, "secretkey");
    req.user = verified;
    next();
  } catch (err) {
    return res.status(401).json("Invalid token");
  }
};

module.exports = verifyToken;