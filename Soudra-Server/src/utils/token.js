const jwt = require("jsonwebtoken");

function decodeToken(req) {
  const token = req.headers.authorization;
  return jwt.verify(token, process.env.JWT_SECRET);
}

function decodeJWT(token) {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const parsedData = JSON.parse(decoded); // Parse JSON if it's valid
    return parsedData;
  } catch (err) {
    console.error("Error decoding string:", err.message);
  }
}

module.exports = { decodeToken, decodeJWT };
