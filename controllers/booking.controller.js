const db = require("../models");
const config = require("../config/auth.config");
var moment = require('moment');  
const Op = db.Sequelize.Op;
const getWID = require('../utils/getWID');
const Booking = db.Booking;
const Service = db.Service;

const createNewBooking = async (req, res) => {
  const user_id = req.userId;
  const service_id = req.body.service_id;
  const worker_id = await getWID.getWIDbyServiceID(service_id);
  const booking_amount = await getServiceAmount(service_id);
  // Create New Booking
  Booking.create({
    user_id: user_id,
    service_id: service_id,
    worker_id: worker_id,
    address_id: req.body.address_id,
    booking_time: req.body.booking_time, //  9:30 AM
    booking_date: req.body.booking_date,
    booking_amount: booking_amount
  }).then(bookingResult => {
    if (bookingResult) {
      return res.status(200).send({
        status: true,
        message: "Service Booked Succesfuly",
        data: bookingResult,
      });
    } else {
        return res.status(200).send({
            status: false,
            message: "Unable to book service",
            data: bookingResult,
          });
    }
  }).catch(err => {
    return res.status(500).send({
      status: false,
      message: err,
      data: null,
    });
  });
  // console.log(worker_id);
}

const getServiceAmount = (service_id) => {

  return new Promise((resolve, reject) => {

    Service.findOne({
      attributes: ['id', 'service_charge'],
      where: {
        id: service_id,
      }
    }).then(serviceResult => {
      if (serviceResult) {
        resolve(serviceResult.service_charge);
      } else {
        reject(0);
      }
    });

  });

}

const getTimeAvailability = (req,res) => {
    const {service_id} = req.body;
    const today = moment().format("YYYY-MM-DD");
    console.log("getTimeAvailability is working",service_id);
    console.log();
}

const getTodaysBookingData = (service_id) => {

    return new Promise((resolve, reject) => {

        Service.findAll({
            attributes: ['id', 'booking_time','booking_date'],
        });

    });

}

module.exports = {
  createNewBooking: createNewBooking,
  getTimeAvailability:getTimeAvailability
}