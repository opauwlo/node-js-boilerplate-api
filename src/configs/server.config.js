const express = require('express');
const cors = require('cors');

require('dotenv').config();
// require('./db.config');

const app = express();

// urlencoded
app.use(
  express.urlencoded({
    extended: false,
  }),
);

// cors
app.use(cors());

// use json
app.use(express.json());

// routes
const routes = require('../routes/routes');

app.use(routes);

module.exports = app;
