const { Category } = require('../models');

const throwError = { status: 400, message: 'Some required fields are missing' };
const postCategoriesMiddleware = (req, res, next) => {
    const { title, content } = req.body;
    if (!title || title === '') throw throwError;
    if (!content || content === '') throw throwError;
    next();
};

const checkCategoryIds = async (req, _res, next) => {
    const { categoryIds } = req.body;
    const throwCategory = { status: 400, message: 'one or more "categoryIds" not found' };
    if (!categoryIds || categoryIds.length === 0) throw throwError;

    const map = categoryIds.map((elem) => Category.findOne({ where: { id: elem } }));
    const response = await Promise.all(map);
    console.log(response);
    const error = response.some((elem) => elem === null);
    if (error) throw throwCategory;
    next();
};

module.exports = {
    postCategoriesMiddleware,
    checkCategoryIds,
};