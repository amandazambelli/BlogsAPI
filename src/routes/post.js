const express = require('express');

const postController = require('../controllers/post');

const verifyToken = require('../middlewares/tokenValidation');
const verifyPost = require('../middlewares/postVerification');
const verifyPostEditing = require('../middlewares/editVerification');

const route = express.Router();

route.post('/', verifyToken, verifyPost, postController.create);
route.get('/', verifyToken, postController.findAll);
route.get('/:id', verifyToken, postController.findByPk);
route.put('/:id', verifyToken, verifyPostEditing, postController.update);
route.delete('/:id', verifyToken, postController.destroy);

module.exports = route;
