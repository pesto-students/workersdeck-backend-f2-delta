const db = require("../models");
const otp = require('../utils/otp');
const getWID = require('../utils/getWID');
const User = db.users;
const Worker = db.WorkersProfile;
const Service = db.Service;
const Op = db.Sequelize.Op;
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
    }).then(async user => {
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

const CreateService = async (req,res) => {
    const userId = req.userId;
    const WorkerId = await getWID.getWid(userId);
    Service.create({
        service_name: req.body.service_name,
        service_charge:req.body.service_charge,
        service_description: req.body.service_description,
        start_time: req.body.start_time,  //  9:30 AM
        close_time: req.body.close_time, // 
        estimate_time: req.body.estimate_time,
        category_id: req.body.category_id,
        subcategory_id: req.body.subcategory_id,
        servicable_city_id:req.body.city_id,
        servicable_pincode: req.body.servicable_pincode,
        wid:WorkerId,
        createdAt: new Date(),
        updatedAt: new Date(),
    }).then(service => {
        if(service){
            return res.status(200).send({
                status:true,
                message:"Service Listed Succesfuly",
                data: service
            });
        }
    });
};




module.exports = {
    signup,
    CreateService
}