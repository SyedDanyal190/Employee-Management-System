const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];  // Bearer tokenString
  if (!token) return res.status(401).json({ message: "Invalid token format" });

  jwt.verify(token, "mySecretkey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    req.user = { id: decoded.id };  // assuming token contains user id as 'id'
    next();
  });
};

module.exports = { verifyToken };
