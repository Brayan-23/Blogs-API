const { User, BlogPost } = require('../models');
const { createToken } = require('../utils/jwt.util');

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        const throwError = { status: 400, message: 'Invalid fields' };
        throw throwError;
    }

    const token = createToken(email, user.id);
    return { type: null, message: token };
};

const createUser = async ({ email, password, displayName, image }) => {
    const user = await User.findOne({ where: { email } });

    if (user) {
        const throwError = { status: 409, message: 'User already registered' };
        throw throwError;
    }

     await User.create({ displayName, email, password, image });

    const token = createToken(email, displayName, image);
    return { type: null, message: token };
};

const getUsers = async () => {
    const user = await User.findAll({ attributes: { exclude: ['password'] } });

    return { type: null, message: user };
};

const getUser = async (id) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    if (!user) {
        const throwError = { status: 404, message: 'User does not exist' };
        throw throwError;
    }

    return { type: null, message: user };
};

const deletedUser = async (id) => {
     await BlogPost.destroy({ where: { userId: id } });
    const user = await User.destroy({ where: { id } });

    return { type: null, message: user };
};

module.exports = {
    validateLogin,
    createUser,
    getUser,
    getUsers,
    deletedUser,
};