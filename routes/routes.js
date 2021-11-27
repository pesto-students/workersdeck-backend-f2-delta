const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const listingController = require('../controllers/listing.controller');
const workersController = require('../controllers/workers.controller');
const { verifySignUp,authJwt,workerSignup,isWorker } = require("../middlewares");


// Authentication API
router.post(
    "/user/signup",
    [
        verifySignUp.checkDuplicateMobileOrEmail,
    ],
    authController.signup
  );
router.post('/user/signin', authController.signin);
router.get(
  "/user/myprofile",
  [
    authJwt.verifyToken,
  ],
  authController.myprofile
);
router.post(
  "/user/reset-password",
  authController.resetPassword
);

// Workers api
router.post('/worker/signup',
[
  verifySignUp.checkDuplicateMobileOrEmail,
  workerSignup.validateCity,
  workerSignup.validateCategory,
  workerSignup.validateSubCategory,
],
workersController.signup
);

// Service apis
router.post('/worker/createservice',
[
  authJwt.verifyToken,
  isWorker.isWorker
],
workersController.CreateService
);

router.get('/cities',listingController.getCities);
router.get('/categories',listingController.getCategories);
router.get('/listing',listingController.showWorkersLists);


module.exports = router;
