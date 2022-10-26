const { createCategory } = require('../services/Category.service');

const categoryCreate = async (req, res) => {
    const { name } = req.body;
   const { message } = await createCategory(name);
    return res.status(201).json({ id: message.id, name });
};

module.exports = {
    categoryCreate,
};