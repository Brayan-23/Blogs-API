const { createCategory, getCategories } = require('../services/category.service');

const categoryCreate = async (req, res) => {
    const { name } = req.body;
   const { message } = await createCategory(name);
    return res.status(201).json({ id: message.id, name });
};

const categoriesGet = async (_req, res) => {
    const { message } = await getCategories();
    return res.status(200).json(message);
};

module.exports = {
    categoryCreate,
    categoriesGet,
};