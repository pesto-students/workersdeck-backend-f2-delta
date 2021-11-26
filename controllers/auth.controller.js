const express = require('express');
const { check, validationResult, body } = require('express-validator');
const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



// exports.signup = (req, res, next) => {
//     const errors = validationResult(req);
//     console.log('isErrors', errors.isEmpty());
//     const { fullname,email, phone, password } = req.body;
// };

// const authController = {
//     signup: (req, res) => {
//         console.log("req.body", req.body);
//     },
// };

const signup = (req,res) => {
    const { fullname,email, mobile_no, password } = req.body;
    const verificationkey = makeid(12);
    User.create({
        fullname: fullname,
        email: email,
        password: bcrypt.hashSync(password, 8),
        mobile_no: mobile_no,
        verification_key: makeid(12),
      }).then(() => {
            res.send({ 
              status:true,
              message: "User was registered successfully!",
              data:null,
             });
          }
      );

};

const signin = (req,res) => {
    const {email,password} = req.body;
    User.findOne({
        where: {
          email: email
        }
      }).then(user => {
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
              message: "Login Succesfull",
              data: {
                id: user.id,
                fullname: user.fullname,
                email: user.email,
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


const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const myprofile = (req,res) => {

}

module.exports = {
    signup,
    signin,
    myprofile,
}
