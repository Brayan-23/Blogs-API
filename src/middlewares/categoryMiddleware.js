const categoryMiddleware = (req, res, next) => {
    const { name } = req.body;
    const throwError = { status: 400, message: '"name" is required' };
    if (!name || name === '') throw throwError;
    next();
};

module.exports = {
    categoryMiddleware,
};