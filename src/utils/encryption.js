const JWT = require("jsonwebtoken");

const signingData = (data) => {
  const dataStr = JSON.stringify(data);
  const encData = JWT.sign(dataStr, { algorithm: "RS256" });
  return encData;
};

const verifyToken = (token) => {
  return JWT.verify(token, process.env.JWT_SECRET);
};

module.exports = { signingData, verifyToken };
