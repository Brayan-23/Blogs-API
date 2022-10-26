const { Category } = require('../models');

const createCategory = async (name) => {
    const result = await Category.create({ name });
    return { type: null, message: result };
};

module.exports = {
    createCategory,
};