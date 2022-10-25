const express = require('express');

const userRouter = express.Router();
const { createUser, validationToken } = require('../middlewares/userMiddleware');
const { generateUser, userGet } = require('../controller/user.controller');

userRouter.post('/', createUser, generateUser);
userRouter.get('/:id', validationToken, userGet);

module.exports = userRouter;
