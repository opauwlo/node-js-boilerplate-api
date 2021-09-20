const express = require('express');

const router = express.Router();
// controller
const { controller } = require('../controllers/put.controller');

router.put('/api/put', controller.put);

module.exports = router;
