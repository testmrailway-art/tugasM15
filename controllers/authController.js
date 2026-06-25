const jwt = require("jsonwebtoken");
const users = require("../models/userModel");
const config = require("../config/jwt");
exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Login gagal" });
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    config.secret,
    { expiresIn: config.expiresIn },
  );
  res.json({
    message: "Login berhasil",
    token: token,
  });
};
