const db = require("../models");
const Address = db.Address;

const saveAddress = (req,res) => {
    const userId = req.userId;
    Address.create({
        uid: userId,
        name: req.body.name,
        type:req.body.type,
        address: req.body.address,
        pin_code: req.body.pin_code,
        
    }).then(addresses => {
        return res.status(200).send({
            status:true,
            message: "Address saved successfully!",
            data:addresses,
           });
    });
}

const deleteAddress = (req, res) => {
    const userId = req.userId;
    Address.destroy({
        where :{
            id:req.body.id,
            uid:userId
        }
    }).then(address => {
        if(!address){
            return res.status(404).send({
                status:false,
                message: "Address not found for this user",
                data:null,
               });
        }else{
            return res.status(200).send({
                status:true,
                message: "Address Deleted Succesfuly",
                data:null,
               });
        }
    })
}

const getBookingHistory = (req,res) => {
    const type = req.params.type;
  
}

module.exports = {
    saveAddress,
    deleteAddress,
    getBookingHistory
}