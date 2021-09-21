const express = require('express');

const router = express.Router();

// Routes

// delete router
const { deleteController } = require('../controllers/delete.controller');

router.delete('/api/delete', deleteController.delete);

// get router
const { getController } = require('../controllers/get.controller');

router.get('/api/get', getController.get);

// post router
const { postController } = require('../controllers/post.controller');

router.post('/api/post', postController.post);

// put (update) router
const { putController } = require('../controllers/put.controller');

router.put('/api/put', putController.put);

module.exports = router;
