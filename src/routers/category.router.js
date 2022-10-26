const express = require('express');
const { categoryCreate } = require('../controller/category.controller');
const { validationToken } = require('../middlewares/userMiddleware');
const { categoryMiddleware } = require('../middlewares/categoryMiddleware');

const categoryRouter = express.Router();

categoryRouter.post('/', validationToken, categoryMiddleware, categoryCreate);

module.exports = categoryRouter;