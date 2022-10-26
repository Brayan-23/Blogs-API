const { transactionTest } = require('../services/postCaterory.service');

const testTransaction = async (req, res) => {
    const corpo = req.body;
    const result = await transactionTest(corpo, req.user);
    return res.status(201).json(result);
};

module.exports = {
    testTransaction,
};