const { Category } = require('../models');

const createCategory = async (name) => {
    const result = await Category.create({ name });
    return { type: null, message: result };
};

const getCategories = async () => {
    const categories = await Category.findAll();

    return { type: null, message: categories };
};

module.exports = {
    createCategory,
    getCategories,
};