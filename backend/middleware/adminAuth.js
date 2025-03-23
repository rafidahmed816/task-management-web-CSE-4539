// middleware/adminAuth.js
const adminAuth = function (req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ msg: "Access denied" });
  }
};

module.exports = adminAuth;
