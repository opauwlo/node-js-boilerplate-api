const express = require('express');
const router = express.Router();  
//controller
const controller = require('../controllers/home.controller');

router.get('/', controller.get);

module.exports = router;