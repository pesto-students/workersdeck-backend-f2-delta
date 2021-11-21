const express = require('express')
const bodyParser  = require('body-parser');
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const routes = require('./routes/routes');

// API Prefix
app.use("/api/v1", routes);

app.get('/', (req, res) => {
    res.send('WorkersDeck Is Live')
})

app.listen(port, () => {
    console.log(`WorkersDeck Started at http://localhost:${port}`)
})