const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const listingController = require('../controllers/listing.controller');
const { verifySignUp,authJwt } = require("../middlewares");


// Authentication API
router.post(
    "/user/signup",
    [
        verifySignUp.checkDuplicateMobileOrEmail,
    ],
    authController.signup
  );
router.post('/user/signin', authController.signin);
router.post(
  "/user/myprofile",
  [
    authJwt.verifyToken,
  ],
  authController.myprofile
);


// listing apis

router.get('/listing',listingController.showWorkersListByPincode);


module.exports = router;
