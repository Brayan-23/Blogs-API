const express = require('express');
require('express-async-errors');
const loginRouter = require('./routers/login.router');
const userRouter = require('./routers/user.router');
const categoryRouter = require('./routers/category.router');
// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use((err, req, res, _next) => {
    console.log(err);
    return res.status(err.status).json({ message: err.message }); 
});
module.exports = app;
