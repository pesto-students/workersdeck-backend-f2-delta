const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Op = db.Sequelize.Op;
const otp = require('../utils/otp');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const createNewBooking = (req,res) => {

}

module.exports ={
    createNewBooking: createNewBooking,
}