require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (data, userId) => {
    const token = jwt.sign({ data, id: userId }, process.env.JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256', 
    });

    return token;
};

const tokenValidation = (token) => {
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        return data;
    } catch (err) {
        const throwError = { status: 401, message: 'Expired or invalid token' };
        throw throwError;
    }
};

module.exports = {
    createToken,
    tokenValidation,
};