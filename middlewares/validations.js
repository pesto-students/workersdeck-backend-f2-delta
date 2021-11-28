const joi = require("joi");
const errorFunction = require("../../utils/errorFunction");

const serviceListValidation = joi.object({
     pin_code: joi.min(5).max(6).trim(true).required(),
     city: joi.string().alphanum().trim(true).required(),
});


module.exports = {
    serviceListValidation,
    errorFunction
}
