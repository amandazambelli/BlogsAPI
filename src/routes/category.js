const express = require('express');

const categoryController = require('../controllers/category');

const verifyToken = require('../middlewares/tokenValidation');

const route = express.Router();

route.post('/', verifyToken, categoryController.create);
route.get('/', verifyToken, categoryController.findAll);

module.exports = route;
