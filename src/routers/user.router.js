const express = require('express');

const userRouter = express.Router();
const { createUser, validationToken } = require('../middlewares/userMiddleware');
const { generateUser, userGet, userGets, deleteUser } = require('../controller/user.controller');

userRouter.post('/', createUser, generateUser);
userRouter.get('/:id', validationToken, userGet);
userRouter.get('/', validationToken, userGets);
userRouter.delete('/me', validationToken, deleteUser);

module.exports = userRouter;
