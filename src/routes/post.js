const express = require('express');

const router = express.Router();
// controller
const { controller } = require('../controllers/post.controller');

router.post('/api/post', controller.post);

module.exports = router;
