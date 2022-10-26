const express = require('express');
const { categoryCreate, categoriesGet } = require('../controller/category.controller');
const { validationToken } = require('../middlewares/userMiddleware');
const { categoryMiddleware } = require('../middlewares/categoryMiddleware');

const categoryRouter = express.Router();

categoryRouter.post('/', validationToken, categoryMiddleware, categoryCreate);
categoryRouter.get('/', validationToken, categoriesGet);

module.exports = categoryRouter;