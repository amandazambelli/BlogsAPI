const postService = require('../services/post');
const userService = require('../services/user');

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

const update = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const findUser = await userService.findByPk(req.user);

  const findPost = await postService.findByPk(id);

  console.log('user no update', findUser.id);
  console.log('post no update', findPost.id);

  if (findUser.id !== findPost.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  const updated = await postService.update({ title, content }, id);
  console.log('controller no update', updated);

  return res.status(200).json(updated);
};

const destroy = async (req, res) => {
  const { id } = req.params;

  const post = await postService.findByPk(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (post.userId !== req.user) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  await postService.destroy(post.id);

  return res.status(204).end();
};

module.exports = { create, findAll, findByPk, update, destroy };
