const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
  
// // console.log("Authorization Header:sssss", req.headers.authorization);


// console.log("Authorization Header:", req.headers["authorization"]);

//   if (!authHeader) return res.status(401).json({ message: "No token provided" });

//   const token = authHeader.split(" ")[1];  // Bearer tokenString
//   if (!token) return res.status(401).json({ message: "Invalid token format" });

//   jwt.verify(token, "mySecretkey", (err, decoded) => {
//     if (err) return res.status(401).json({ message: "Unauthorized" });

//     // Attach both id and role from the token
//     req.user = {
//       id: decoded.id,
//       role: decoded.role,
//     };
//     next();
//   });
// };


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("Authorization Header:", req.headers["authorization"]);

  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1]; // Extract the token part after "Bearer"

  if (!token) return res.status(401).json({ message: "Invalid token format" });

  jwt.verify(token, "mySecretkey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    // Attach both id and role from the token
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    // ✅ Log role and id from token
    console.log("User ID:", decoded.id);
    console.log("User Role:", decoded.role);

    next();
  });
};



const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }
  next();
};

const isUser = (req, res, next) => {
  if (req.user.role !== 'user') {
    return res.status(403).json({ message: "Access denied: Users only" });
  }
  next();
};

module.exports = {
  verifyToken,
  isAdmin,
  isUser,
};
