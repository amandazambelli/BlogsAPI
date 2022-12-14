const { User } = require('../database/models');

const create = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
    
  return newUser;
};

const findAll = async () => {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );
  return users;
};

const findByPk = async (id) => {
  const findUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return findUser;
};

const destroy = async (id) => {
  const user = await User.destroy({ where: { id } });

  return user;
};

module.exports = { create, findAll, findByPk, destroy };
