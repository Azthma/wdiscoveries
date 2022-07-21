const express = require('./app/express');
const db      = require('./database/config/db');

Promise = require('bluebird');

const port = process.env.PORT || 3000;

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const app = express();

app.listen(port, function() {
    console.log('listening at port ' + port);
});