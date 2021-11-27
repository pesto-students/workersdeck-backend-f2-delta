const express = require('express')
const bodyParser  = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require('express-validator');
const multer = require('multer');
const port = process.env.PORT || 8080;
const routes = require('./routes/routes');
require("dotenv").config();
const app = express();
//var upload = multer();


app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
// Cors
var corsOptions = {
  origin: " http://localhost:${port}"
};
app.use(cors(corsOptions));
// End Cors configration

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// API Prefix
app.use("/api/v1", routes);

app.get('/', (req, res) => {
    res.send('WorkersDeck Is Running')
})

app.listen(port, () => {
    console.log(`WorkersDeck Started at http://localhost:${port}`)
})