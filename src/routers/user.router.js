const express = require('express');

const userRouter = express.Router();
const { createUser } = require('../middlewares/userMiddleware');
const { generateUser } = require('../controller/user.controller');

userRouter.post('/', createUser, generateUser);

module.exports = userRouter;
