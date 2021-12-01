const db = require("../models");
const Address = db.Address;



const checkIfUserAddressIsValid = (req, res, next) =>{

    if(!req.body.address_id){
        return res.status(406).send({
            status:false,
            message: "Invalid Address field",
            data: null
          });
    }

    Address.findOne({
        where:{
            id:req.body.address_id
        }
    }).then(addressResult =>{
        if(addressResult){
            next();
        }else{
            return res.status(404).send({
                status:false,
                message: "Incorrect Address",
                data: null
              });
        }
    })

};

module.exports = {
    checkIfUserAddressIsValid : checkIfUserAddressIsValid
}