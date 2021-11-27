// const express = require('express');
// const { check, validationResult, body } = require('express-validator');
const db = require("../models");
const config = require("../config/auth.config");
const otp = require('../libraries/otp');
const User = db.users;
const Worker = db.WorkersProfile;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const signup = (req,res) => {
    User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        mobile_no: req.body.mobile_no,
        verification_key: otp.makeid(12),
        is_verified : 1,
        role:1
    }).then(user => {
      const userid = user.id;
        Worker.create({
            servicable_pincode: req.body.servicable_pincode,
            servicable_city: req.body.servicable_city,
            category_id: req.body.category_id,
            subcategory_id:req.body.subcategory_id,
            uid:userid,
            avaibility:1, 
            createdAt: new Date(),
            updatedAt:new Date(),
        }).then(worker => {
            return res.status(200).send({
                status: true,
                message: "Worker Profile Created successfully!",
                data: null
              });
        }).catch(err => {
            return res.status(500).send({
                status:false,
                message: err,
                data:null
            })
        });
    });

};

const listService = (req,res) => {

};

module.exports = {
    signup,
    listService
}