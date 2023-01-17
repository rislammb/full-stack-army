const userService = require('../service/user');
const error = require('../utils/error');

const getUsers = async (_req, res, next) => {
  /**
   * @TODO: filter, sort, pagination, select
   */
  try {
    const users = await userService.findUsers();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

const getUserById = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await userService.findUserByProperty('_id', userId);

    if (!user) {
      throw error('User not found!', 404);
    }
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const postUser = (req, res, next) => {};
const putUserById = (req, res, next) => {};
const patchUserById = (req, res, next) => {};
const deleteUserById = (req, res, next) => {};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  putUserById,
  patchUserById,
  deleteUserById,
};
