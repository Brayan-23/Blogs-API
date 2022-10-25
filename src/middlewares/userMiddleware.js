const { schemaUser } = require('../utils/joiValidation');
const { tokenValidation } = require('../utils/jwt.util');

const userMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    const throwError = { status: 400, message: 'Some required fields are missing' };
    if (!email || email === '') throw throwError;
    if (!password || password === '') throw throwError;
    next();
};

const createUser = (req, res, next) => {
    const { displayName, email, password } = req.body;
    const { error } = schemaUser.validate({ displayName, email, password });
    if (error) {
        error.status = 400;  
        throw error;
    } 
    next();
};

const validationToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || authorization === '') {
        const throwError = { status: 401, message: 'Token not found' };
        throw throwError;
    }
    const data = tokenValidation(authorization);
    req.user = data;
    next();
};

module.exports = {
    userMiddleware,
    createUser,
    validationToken,
};