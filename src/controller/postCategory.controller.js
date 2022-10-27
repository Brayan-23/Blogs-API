const { transactionTest, getPostsAndCategories } = require('../services/postCaterory.service');

const testTransaction = async (req, res) => {
    const corpo = req.body;
    const result = await transactionTest(corpo, req.user);
    return res.status(201).json(result);
};

const postAndCategory = async (req, res) => {
    const { message } = await getPostsAndCategories();
    return res.status(200).json(message);
};

module.exports = {
    testTransaction,
    postAndCategory,
};