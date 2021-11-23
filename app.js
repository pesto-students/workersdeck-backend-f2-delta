const express = require('express')
const bodyParser  = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = process.env.PORT || 8080;
const routes = require('./routes/routes');
require("dotenv").config();
const app = express();
// const sequelize = new Sequelize('postgres://postgres:password@example.com:5432/workersdeck');

// Cors
var corsOptions = {
  origin: " http://localhost:${port}"
};
app.use(cors(corsOptions));
// End Cors configration

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded


// API Prefix
app.use("/api/v1", routes);

app.get('/', (req, res) => {
    res.send('WorkersDeck Is Running')
})

app.listen(port, () => {
    console.log(`WorkersDeck Started at http://localhost:${port}`)
})