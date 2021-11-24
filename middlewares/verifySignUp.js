const db = require("../models");
const User = db.users;


checkDuplicateMobileOrEmail = (req, res, next) => {
    // Username
     console.log(req.body);
    // User.findOne({
    //     where: {
    //         mobile_no: req.body.mobile_no
    //       }
    // }).then(user=>{
    //     if (user) {
    //         console.log('user',user);
    //     }
    // });
    next();
  };

  const verifySignUp = {
    checkDuplicateMobileOrEmail: checkDuplicateMobileOrEmail,
  };
  
  module.exports = verifySignUp;
  