const db = require("../models");
const Worker = db.WorkersProfile;
const Service = db.Service;

const getWid = (uid) => {
    return new Promise((resolve, reject) => {
      Worker.findOne({
        attributes: ['id', 'uid'],
        where: {
          uid: uid
        }
      }).then(worker => {
        if (worker) {
          // return worker.id;
          resolve(worker.id);
        } else {
          //return null;
          reject(null);
        }
      });
    });
  };

  const getWIDbyServiceID = (service_id) => {

    return new Promise((resolve, reject) => {
      Service.findOne({
        attributes: ['id'],
        where:{
          id:service_id
        }
      }).then(serviceResult => {
        if(serviceResult){
          resolve(serviceResult.id);
        }else{
          reject(null);
        }
      });
    });

  }

module.exports ={
    getWid,
    getWIDbyServiceID
}