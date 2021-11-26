const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.users;

verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
    // let token = req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({
        status:false,
        message: "No token provided!",
        data: null
      });
    }
  
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          status:false,
          message: "Unauthorized Access!",
          data: null
        });
      }
      req.userId = decoded.id;
      next();
    });
  };
  

  const authJwt = {
    verifyToken: verifyToken,
  };

  module.exports = authJwt;