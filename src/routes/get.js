const express = require('express');

const router = express.Router();
// controller
const { controller } = require('../controllers/get.controller');

router.get('/api/get', controller.get);

module.exports = router;
