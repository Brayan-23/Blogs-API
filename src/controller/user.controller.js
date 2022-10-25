const { validateLogin, createUser } = require('../services/user.service');

const generateToken = async (req, res) => {
    const corpo = req.body;
    const { message } = await validateLogin(corpo);
    return res.status(200).json({ token: message });
};

const generateUser = async (req, res) => {
    const corpo = req.body;
    const { message } = await createUser(corpo);
    return res.status(201).json({ token: message });
};

module.exports = {
    generateToken,
    generateUser,
};
