const db = require("../models");
const User = db.users;


checkDuplicateMobileOrEmail = (req, res, next) => {
    // Username

    const {fullname,email,password,mobile_no} = req.body;

    if (!(fullname && email && password && mobile_no)) {
      res.status(400).send(
        { message : 'Please Check All Fields'}
        );
      return;
    }

    User.findOne({
      where: {
        mobile_no: req.body.mobile_no
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Mobile No. is already in use!"
        });
        return;
      }
  
      // Email
      User.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Email is already in use!"
          });
          return;
        }
  
        next();
      });
    });
  };

  const verifySignUp = {
    checkDuplicateMobileOrEmail: checkDuplicateMobileOrEmail,
  };
  
  module.exports = verifySignUp;
  