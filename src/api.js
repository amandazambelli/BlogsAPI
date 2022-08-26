const express = require('express');

const loginController = require('./controllers/login');
const userController = require('./controllers/user');
// const categoryController = require('./controllers/category');

const verifyToken = require('./middlewares/tokenValidation');
const verifyLogin = require('./middlewares/loginVerification');
const {
  verifyName,
  verifyPassword,
  verifyEmail,
} = require('./middlewares/userVerification');

const app = express();

app.use(express.json());

app.post('/login', verifyLogin, loginController.login);
app.post('/user', verifyName, verifyPassword, verifyEmail, userController.create);
app.get('/user', verifyToken, userController.findAll);
app.get('/user/:id', verifyToken, userController.findByPk);
// app.post('/categories', categoryController.create);
// app.get('/categories', categoryController.findAll);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
