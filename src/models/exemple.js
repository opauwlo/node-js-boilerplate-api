/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  admin: {
    type: Boolean,
    default: false,
  },

});

mongoose.model('users', User);
