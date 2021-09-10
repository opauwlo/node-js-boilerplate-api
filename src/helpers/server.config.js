const express = require("express");

// require("../models/db/config")
require("dotenv").config();

const app = express();

//static
app.use(express.static(__dirname + "/public"));

app.use(
  express.urlencoded({
    extended: false
  })
);

// use json
app.use(express.json());

module.exports = app;