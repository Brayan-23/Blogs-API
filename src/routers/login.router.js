const express = require('express');
const { generateToken } = require('../controller/user.controller');
const { userMiddleware } = require('../middlewares/userMiddleware');

const loginRouter = express.Router();

loginRouter.post('/', userMiddleware, generateToken);

module.exports = loginRouter;