// middleware/auth.js

const authorize = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'mySecretkey');
    
    if (!roles.includes(decoded.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = decoded;
    next();
  };
};



module.exports = {
    authorize
}