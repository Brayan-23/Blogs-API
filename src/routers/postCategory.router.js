const express = require('express');
const { testTransaction } = require('../controller/postCategory.controller');
const { validationToken } = require('../middlewares/userMiddleware');
const { 
    postCategoriesMiddleware, 
    checkCategoryIds } = require('../middlewares/postCategoryMiddleware');

const postRouter = express.Router();

postRouter.post('/', validationToken, postCategoriesMiddleware, checkCategoryIds, testTransaction);

module.exports = postRouter;