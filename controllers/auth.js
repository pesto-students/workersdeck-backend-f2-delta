const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult, body } = require('express-validator/check');
const db = require('../db/dbconfig');

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    console.log('isErrors', errors.isEmpty());
    const { fullname,email, phone, password } = req.body;
};