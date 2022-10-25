const { validateLogin, createUser, getUser, getUsers } = require('../services/user.service');

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

const userGet = async (req, res) => {
    const { id } = req.params;
    const { message } = await getUser(id);
    return res.status(200).json(message);
};

const userGets = async (_req, res) => {
    const { message } = await getUsers();
    return res.status(200).json(message);
};

module.exports = {
    generateToken,
    generateUser,
    userGet,
    userGets,
};
