const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Op = db.Sequelize.Op;
const otp = require('../utils/otp');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const signup = (req,res) => {
  console.log(otp);
    const { fullname,email, mobile_no, password } = req.body;
    User.create({
        fullname: fullname,
        email: email,
        password: bcrypt.hashSync(password, 8),
        mobile_no: mobile_no,
        verification_key: otp.makeid(12),
        is_verified : 1,
      }).then(() => {
              return res.status(200).send({
              status:true,
              message: "User was registered successfully!",
              data:null,
             });
          }
      ).catch(err => {
        return res.status(500).send({
          status:false,
          message: err,
          data:null,
         });

      });

};

const signin = (req,res) => {
    const {email,password} = req.body;
    User.findOne({
        where: {
          email: email
        }
      }).then(async user => {
            // If user not found
            if (!user) {
                return res.status(404).send({ 
                  status: false,
                  message: "User Not found",
                  data:null 
                });
              }

            //   Check password
            var passwordIsValid = bcrypt.compareSync(
                password,
                user.password
              );

              if (!passwordIsValid) {
                return res.status(401).send({
                  status:false,
                  message: "Invalid Password!",
                  data: null
                });
              }
              
              var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
              });
            //   If successfully signed then return response
            res.status(200).send({
              status:true,
              message: "Login Succesfuly",
              data: {
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                role: user.role,
                accessToken: token
              }
               
            });
      }).catch(function (err) {
        res.status(500).send({ 
          status:false,
          message: err.message ,
          data:null,
        });
      })


}

const resetPassword = (req, res) => {

  User.findOne({
    where: {
      email: email
    }
  }).then(result => {
    // if not found

    if (!result) {
      return res.status(404).send({ 
        status: false,
        message: "Email Not found",
        data:null 
      });
    }else{
      return res.status(200).send({ 
        status: true,
        message: "OTP Send to your email.",
        data:null 
      });
    }
  }).catch(function(err){

    return res.status(500).send({ 
      status: false,
      message: "Something went wrong",
      data:null 
    });

  });
}


const myprofile = (req,res) => {
  const uid = req.userId;
  User.findOne({
    where: {
      id: uid
    },
    attributes: {
      exclude: ['password']
  }
  }).then(result => {

    return res.status(200).send({ 
      status: true,
      message: "User Details Fetch Succesfuly",
      data:result 
    });
    
  });
}

module.exports = {
    signup,
    signin,
    myprofile,
    resetPassword
}
