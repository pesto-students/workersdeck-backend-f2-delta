const db = require("../models");
const Worker = db.WorkersProfile;
const User = db.users;

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


module.exports ={
    getWid,
}