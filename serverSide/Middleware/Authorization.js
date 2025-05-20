exports.onlyAdmin = (req, res, next) => {
  if (req.user.role === "admin") return next();
  return res.status(403).json({ message: "Admin access only" });
};

exports.allowAdminOrSelf = (req, res, next) => {
  if (req.user.role === "admin" || req.user.id === req.params.userId) {
    return next();
  }
  return res.status(403).json({ message: "Access denied" });
};
