const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Service = db.Service;

const checkIfBookable = (req, res,next) => {
    
    Service.findOne({
        attributes: ['id','status'],
        where:{
            id: req.params.service_id,
        }
    }).then(serviceResult => {
        if(serviceResult){
            next();
        }else{
            return res.status(404).send({status:false, message:'Invalid Booking Request',data:null});
        }
    });

}

module.exports = checkIfBookable;