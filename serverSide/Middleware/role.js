// const jwt = require("jsonwebtoken");

// // Base token verifier
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1]; // "Bearer token"

//   if (!token) {
//     return res.status(401).json({ error: "Access Denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, 'mySecretkey');
//     req.user = decoded; // includes id, role
//     next();
//   } catch (err) {
//     res.status(400).json({ error: "Invalid Token" });
//   }
// };

// // Admin middleware
// const adminAuth = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.role !== 'admin') {
//       return res.status(403).json({ error: "Access denied: Admins only" });
//     }
//     next();
//   });
// };

// // User middleware
// const userAuth = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.role !== 'user') {
//       return res.status(403).json({ error: "Access denied: Users only" });
//     }
//     next();
//   });
// };

// module.exports = {
//   adminAuth,
//   userAuth,
// };
















const jwt = require("jsonwebtoken");

// Internal: Verify and decode token
const verifyToken = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expect: "Bearer <token>"

  if (!token) {
    return { error: { status: 401, message: "Access Denied. No token provided." } };
  }

  try {
    const decoded = jwt.verify(token, 'mySecretkey');
    return { user: decoded }; // decoded contains { id, role }
  } catch (err) {
    return { error: { status: 400, message: "Invalid Token" } };
  }
};

// Middleware for Admins
const adminAuth = (req, res, next) => {
  const result = verifyToken(req, res);
  if (result.error) return res.status(result.error.status).json({ error: result.error.message });

  if (result.user.role !== 'admin') {
    return res.status(403).json({ error: "Access denied: Admins only" });
  }

  req.user = result.user;
  next();
};

// Middleware for Users
const userAuth = (req, res, next) => {
  const result = verifyToken(req, res);
  if (result.error) return res.status(result.error.status).json({ error: result.error.message });

  if (result.user.role !== 'user') {
    return res.status(403).json({ error: "Access denied: Users only" });
  }

  req.user = result.user;
  next();
};

module.exports = {
  adminAuth,
  userAuth,
};
