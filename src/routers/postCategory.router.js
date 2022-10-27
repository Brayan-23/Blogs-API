const express = require('express');
const { testTransaction, postAndCategory } = require('../controller/postCategory.controller');
const { validationToken } = require('../middlewares/userMiddleware');
const { 
    postCategoriesMiddleware, 
    checkCategoryIds } = require('../middlewares/postCategoryMiddleware');

const postRouter = express.Router();

postRouter.post('/', validationToken, postCategoriesMiddleware, checkCategoryIds, testTransaction);
postRouter.get('/', validationToken, postAndCategory);

module.exports = postRouter;