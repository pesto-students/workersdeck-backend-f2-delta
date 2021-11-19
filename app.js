const express = require('express')
const bodyParser  = require('body-parser');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World! demo')
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })