const express = require('express');
const { 
    testTransaction, 
    postsAndCategories, 
    postAndCategory,
updatePostAndCategory,
deletePost } = require('../controller/postCategory.controller');
const { validationToken } = require('../middlewares/userMiddleware');
const { 
    postCategoriesMiddleware, 
    checkCategoryIds } = require('../middlewares/postCategoryMiddleware');

const postRouter = express.Router();

postRouter.post('/', validationToken, postCategoriesMiddleware, checkCategoryIds, testTransaction);
postRouter.get('/:id', validationToken, postAndCategory);
postRouter.get('/', validationToken, postsAndCategories);
postRouter.put('/:id', validationToken, postCategoriesMiddleware, updatePostAndCategory);
postRouter.delete('/:id', validationToken, deletePost);

module.exports = postRouter;