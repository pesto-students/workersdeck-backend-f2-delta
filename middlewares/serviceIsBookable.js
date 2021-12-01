const db = require("../models");
const Service = db.Service;
const Op = db.Sequelize.Op;



const checkIfBookable = (req,res,next) => {

    if(!req.body.service_id){
        return res.status(406).send({
            status:false,
            message: "Invalid Service field",
            data: null
          });
    }
    Service.findOne({
        where: {
            id: req.body.service_id,
            status:'1',
        }
    }).then(serviceResult => {
        if(serviceResult){
            next();
        }else{
            return res.status(406).send({
                status:false,
                message: "Worker Not Accepting any booking!",
                data:null,
            });
        }
    });

}

module.exports ={
    checkIfBookable: checkIfBookable
}