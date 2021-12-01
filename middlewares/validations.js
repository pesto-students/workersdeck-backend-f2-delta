const db = require("../models");
const Address = db.Address;
const City = db.City;



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

const checkValidCity = (req,res,next) =>{
    const city = req.query.city;
    City.findOne({
        where:{
            name:city,
        }
    }).then(cityResult => {
        if(cityResult){
            req.city_id =  cityResult.id;
            next();
        }else{
            return  res.status(404).send({
                status:false,
                message:"City Not Found",
                data:null
            });
        }
    });

}

module.exports = {
    checkIfUserAddressIsValid : checkIfUserAddressIsValid,
    checkValidCity:checkValidCity
}