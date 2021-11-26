const express = require('express');
const { check, validationResult, body } = require('express-validator');
const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


const showWorkersListByPincode = (req,res) => {
        console.log(req.body);
};


module.exports = {
    showWorkersListByPincode,
}
