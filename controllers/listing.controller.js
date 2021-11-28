const express = require('express');
const { check, validationResult, body } = require('express-validator');
const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const City = db.City;
const Categories = db.Categories;
const Op = db.Sequelize.Op;

const getCities = (req,res) => {
    City.findAll({
        where:{
            status:'1',
          },
    }).then(result => {
        return res.status(200).send({
            status: true,
            message: "success",
            data: result
        });
    }).catch(function(err){
        return res.status(500).send({
            status: false,
            message: "Something Went wrong",
            data : null
          });
    });
}

const getCategories = (req,res) => {
    Categories.findAll({
    }).then(result => {
        return res.status(200).send({
            status:true,
            message: "Categories fetched successfully",
            data: result
          });
    }).catch(err => {
        return res.status(500).send({
            status:false,
            message: err,
            data: result
          });
    });
}

const showWorkersLists = (req,res) => {
    const {city,pincode} = req.query;
    City.findOne({name: city}).then(result => {
        const cityid = result.id;
    });
};


module.exports = {
    getCities,
    getCategories,
    showWorkersLists,
    
}
