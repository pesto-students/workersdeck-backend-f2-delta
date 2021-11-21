const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.get('/', (req, res,next) => {
    res.json({
        msg:"Api is working",
        status:200
    });
});

//app.route('/user').get();

// Authentication API 
router.post('/user/signin', authController.signin);
router.post('/user/signup', authController.signup);
router.post('/user/resetpassword', authController.resetPassword);
router.post('/user/recoverPassword', authController.recoverPassword);


module.exports = router;
