const express = require('express');

const router = express.Router();
// controller
const { controller } = require('../controllers/delete.controller');

router.delete('/api/delete', controller.delete);

module.exports = router;
