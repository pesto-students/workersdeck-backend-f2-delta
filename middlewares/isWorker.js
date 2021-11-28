const db = require("../models");
const User = db.users;

const isWorker = (req,res,next) => {
    const userId = req.userId;
    User.findOne({
        where: {
            id: userId,
            role:'1'
        }
    }).then(user => {
        if(!user || user == null){
            return res.status(404).send({status:false, message:"You are not worker!",data:null});
        }
        next();
    }).catch(err => {
        return res.status(500).send({status:false, message:err,data:null});
    })

}

module.exports ={
    isWorker: isWorker
}