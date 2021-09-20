const express = require('express');

const routes = express();

// Routes

// delete router
const deleteRouter = require('./delete');

routes.use(deleteRouter);

// get router
const getRouter = require('./get');

routes.use(getRouter);

// post router
const postRouter = require('./post');

routes.use(postRouter);

// post router
const putRouter = require('./put');

routes.use(putRouter);

module.exports = routes;
