const express = require('express');
const router = express.Router();

router.get('/test', (req, res,next) => {
    // console.log(req);
    console.log(new Date().toISOString());
    res.json({
        msg:"Api is working",
        status:200
    });
});

//app.route('/user').get();

router.post('/user/signup', (req, res) => {

});


module.exports = router;
