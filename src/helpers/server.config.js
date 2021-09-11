const express = require("express");
const app = express();

// require("../models/db/config")
require("dotenv").config();

app.use(
  express.urlencoded({
    extended: false
  })
);

// use json
app.use(express.json());

//routes

//home route
const home = require('../routes/home');
app.use('/', home);

//hello route
const hello = require('../routes/hello');
app.use('/hello', hello);

module.exports = app;