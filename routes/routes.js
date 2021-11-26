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


// listing apis
router.get('/cities',listingController.getCities);
router.get('/categories',listingController.getCategories);
router.get('/listing',listingController.showWorkersLists);


module.exports = router;
