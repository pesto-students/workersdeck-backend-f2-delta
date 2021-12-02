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

const getTimeAvailability = async (req,res) => {
    const service_id = req.query.service_id;
    const today = moment().format("YYYY-MM-DD");
    var estimate_time = 60;
    var serviceInfo = {};
    var start_time = '10:30:00';
    var close_time = '18:30:00';
    var time_slots = [];
    await Service.findOne({
      where:{
        id:service_id,
      }
    }).then(serviceResult => {
      serviceInfo = serviceResult;
      estimate_time = parseInt(serviceResult.estimate_time);
      start_time = serviceResult.start_time;
      close_time = serviceResult.close_time;
    });
    time_slots = await getTodaysBookingSlots(start_time,close_time,estimate_time);
    res.status(200).send({
      status:true,
      message:"Time slots fetch successfully",
      data:{
        start_time:start_time,
        close_time:close_time,
        time_slots:time_slots,
        todays_date:today
      }
    });
}


const getTodaysBookingSlots = (start_time,close_time,est_time) => {
    est_time = est_time + 30; //add extra 30 minutes in estimate time for next request
    return new Promise((resolve, reject) => {

      var startTime = moment(start_time, 'HH:mm:ss');
      var endTime = moment(close_time, 'HH:mm:ss');
  
      if( endTime.isBefore(startTime) ){
        endTime.add(1, 'day');
      }

      var timeStops = [];

      while(startTime <= endTime){
        timeStops.push(new moment(startTime).format('HH:mm:ss'));
        startTime.add(est_time, 'minutes');
      }
      if(timeStops.length > 0){
        resolve(timeStops);
      }else{
        reject(timeStops);
      }
    });

}

module.exports = {
  createNewBooking: createNewBooking,
  getTimeAvailability:getTimeAvailability
}