
const { check, validationResult } = require('express-validator');
const db = require("../models");
const Op = db.Sequelize.Op;
const City = db.City;
const Category = db.Category;
const Subcategory = db.SubCategories;

const userValidationRules = () => {
    return [
    body('fullname','Full name is required'),
      body('email').isEmail(),
      body('password').isLength({ min: 8 }),
    ]
  }

const validateworker = (req,res,next) =>{
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    };
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(422).json({
    status:false,
    msg: extractedErrors,
    data:null
    });
}

const validateCity = (req,res,next) =>{

  const city_id = req.body.city_id;
  City.findOne({
    id: city_id
  }).then(city =>{
    if(!city){
       return  res.status(400).send({
          status: false,
          message: "Invalid City!",
          data: null
        });
    }
    next();
  });
  
}

const validateCategory = (req,res,next) =>{
  const categoryid = req.body.category_id;
  Category.findOne({
    id: categoryid
  }).then(category =>{
    if(!category){
       return  res.status(400).send({
          status: false,
          message: "Invalid Category!",
          data: null
        });
    }
    next();
  });
  
}
const validateSubCategory = (req,res,next) =>{
  const subcategoryid = req.body.subcategory_id;
  Subcategory.findOne({
    id: subcategoryid
  }).then(subcategoryid =>{
    if(!subcategoryid){
       return  res.status(400).send({
          status: false,
          message: "Invalid Sub Category!",
          data: null
        });
    }
    next();
  });
  
}


const workerSignup = {
    validateworker: validateworker,
    userValidationRules:  userValidationRules,
    validateCity:validateCity,
    validateCategory:validateCategory,
    validateSubCategory:validateSubCategory
  };
  
  module.exports = workerSignup;
  