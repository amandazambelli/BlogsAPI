const { User } = require('../database/models');

const loginService = async (email, password) => {
  const userLogin = await User.findOne({
    where: { email, password },
  });

  return userLogin;
};

module.exports = loginService;
