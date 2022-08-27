const express = require('express');

const userController = require('../controllers/user');

const verifyToken = require('../middlewares/tokenValidation');
const {
  verifyName,
  verifyPassword,
  verifyEmail,
} = require('../middlewares/userVerification');

const route = express.Router();

route.post('/', verifyName, verifyPassword, verifyEmail, userController.create);
route.get('/', verifyToken, userController.findAll);
route.get('/:id', verifyToken, userController.findByPk);

module.exports = route;
