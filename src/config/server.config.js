const express = require('express');

const app = express();

// require('./db.config');

require('dotenv').config();

app.use(
  express.urlencoded({
    extended: false,
  }),
);

// use json
app.use(express.json());

// routes

const routes = require('../routes/all.routes');

app.use(routes);

module.exports = app;
