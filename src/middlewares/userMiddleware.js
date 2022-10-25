const { schemaUser } = require('../utils/joiValidation');

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

module.exports = {
    userMiddleware,
    createUser,
};