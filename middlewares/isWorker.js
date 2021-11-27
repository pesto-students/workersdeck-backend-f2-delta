const db = require("../models");
const User = db.users;

const isWorker = (req,res,next) => {

    const userId = req.userId;

    User.findOne({
        where: {
            id: userId,
            role:1
        }
    }).then(user => {
        if(!user){
            return res.status(400).send(
                {  status: false,
                  message : 'You Are not Worker',
                  data:null
                }
                );
        }
        next();
    })

}

module.exports ={
    isWorker: isWorker
}