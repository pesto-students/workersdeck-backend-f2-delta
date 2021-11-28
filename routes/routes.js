const express = require('express');
const router = express.Router();
const {authController,listingController,workersController,userController} = require('../controllers/');
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
router.post("/user/reset-password",authController.resetPassword);
router.get(
  "/user/myprofile",
  [
    authJwt.verifyToken,
  ],
  authController.myprofile
);

router.post(
  "/user/save/address",
  [
    authJwt.verifyToken,
  ],
  userController.saveAddress
);

router.delete(
  "/user/delete/address",
  [
    authJwt.verifyToken,
  ],
  userController.deleteAddress
);

// Workers api
router.post('/worker/signup',
[
  verifySignUp.checkDuplicateMobileOrEmail,
  workerSignup.validateCategory,
  workerSignup.validateSubCategory,
],
workersController.signup
);

// Service apis
router.post('/worker/createservice',
[
  authJwt.verifyToken,
  isWorker.isWorker,
  workerSignup.validateCity,
  workerSignup.validateCategory,
  workerSignup.validateSubCategory,
],
workersController.CreateService
);

router.get('/services/list',listingController.showWorkersLists);

// Other APIs
router.get('/cities',listingController.getCities);
router.get('/categories',listingController.getCategories);

module.exports = router;
