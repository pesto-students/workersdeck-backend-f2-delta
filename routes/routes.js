const express = require('express');
const router = express.Router();

router.get('/test', (req, res,next) => {

    res.json({
        msg:"Api is working",
    });
});

//app.route('/user').get();

router.post('/user/signup', (req, res) => {

});


module.exports = router;
