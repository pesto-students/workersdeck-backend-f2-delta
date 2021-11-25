const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { verifySignUp } = require("../middlewares");


router.get('/', (req, res,next) => {
    res.json({
        msg:"Api is working",
        status:200
    });
});

//app.route('/user').get();

// User Authentication API 
// router.use(function(req, res, next) {
//     res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept"
//       );
//       next();
    
// });
router.post(
    "/user/signup",
    [
        verifySignUp.checkDuplicateMobileOrEmail,
    ],
    authController.signup
  );
router.post('/user/signin', authController.signin);



module.exports = router;
