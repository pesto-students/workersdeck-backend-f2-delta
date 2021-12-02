const express = require('express');
const { check, validationResult, body } = require('express-validator');
const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Worker = db.WorkersProfile;
const City = db.City;
const Service =db.Service;
const Categories = db.Categories;
const SubCategories = db.SubCategories;
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

const getSubCategories = (req,res)=>{
    // SubCategories.findAll({
    //     where:{
    //         category_id:req.query.category_id
    //     }
    // }).then(result => {
    //     if(result){

    //         return res.status(200).send({
    //             status:true,
    //             message: "Subcategories fetched successfully",
    //             data: result
    //           });

    //     }else{
    //         return res.status(200).send({
    //             status:false,
    //             message: "Subcategories fetched successfully",
    //             data: result
    //           });
    //     }

    // }).catch(err => {
    //     return res.status(500).send({
    //         status:false,
    //         message: err,
    //         data: result
    //       });
    // });

}

const showWorkersLists =  async (req,res) => {
    const {city,pincode,category_id} = req.query;
    const city_id = req.city_id;
    var subCategoriesData = null;

    await SubCategories.findAll({
        where: {
            category_id: category_id
        }
      }).then(subCatResult =>{
        if(subCatResult){
            subCategoriesData = subCatResult;
        }
      });
    //   select Public.Services.*,Public.WorkersProfile.* from Public.Services left join Public.WorkersProfile on Public.Services.wid = Public.WorkersProfile.id;
      const [results, metadata] = await db.sequelize.query("select Public.Services.*,Public.WorkersProfile.* from Public.Services left join Public.WorkersProfile on Public.Services.wid = Public.WorkersProfile.id");
      console.log(results);
    //   Back to this page
    
};


module.exports = {
    getCities,
    getCategories,
    showWorkersLists,
    getSubCategories,
    
}
