const express = require('express');

const loginController = require('../controllers/login');
const verifyLogin = require('../middlewares/loginVerification');

const route = express.Router();

route.post('/', verifyLogin, loginController.login);

module.exports = route;
