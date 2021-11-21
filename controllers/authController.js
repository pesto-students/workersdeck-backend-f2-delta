const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult, body } = require('express-validator');
const db = require('../config/dbconfig');

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

    res.json({
        msg:"Signup Api is working",
        status:200
    });

};

const signin = (req,res) => {

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

module.exports = {
    signup,
    signin,
    resetPassword,
    recoverPassword
}
