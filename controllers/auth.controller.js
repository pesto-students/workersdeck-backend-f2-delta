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
    console.log(req.body);
    //const { fullname,email, mobile_no, password } = req.body;
    //const verificationkey = this.makeid(12);
   // console.log(verificationkey);
    process.exit();
    User.create({
        fullname: fullname,
        email: email,
        password: bcrypt.hashSync(password, 8),
        mobile_no: mobile_no
      }).then(() => {
            res.send({ message: "User was registered successfully!" });
          }
      );

    // res.json({
    //     msg:"Signup Api is working",
    //     status:200
    // });

};

const signin = (req,res) => {
    console.log(req.body.email);
    res.json({
        msg:"signin() Api is working",
        status:200
    });

}

const resetPassword = (req,res) => {
    res.json({
        msg:"resetPassword()  Api is working",
        status:200
    });
}

const recoverPassword = (req,res) => {
    res.json({
        msg:"recoverPassword() Api is working",
        status:200
    });
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

module.exports = {
    signup,
    signin,
    resetPassword,
    recoverPassword
}
