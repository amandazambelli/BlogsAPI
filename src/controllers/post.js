const postService = require('../services/post');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const newPost = await postService.create({ title, content, categoryIds }, req.user);

  return res.status(201).json(newPost);
};

const findAll = async (req, res) => {
  const posts = await postService.findAll();

  return res.status(200).json(posts);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const findPost = await postService.findByPk(id);

  if (!findPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(findPost);
};

module.exports = { create, findAll, findByPk };
