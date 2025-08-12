const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ status: 0, msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretKey");
    req.user = decoded; // contains userId and role
    next();
  } catch (error) {
    return res.status(401).json({ status: 0, msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
