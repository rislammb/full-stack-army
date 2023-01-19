const User = require('../models/User');
const mongoose = require('mongoose');
const error = require('../utils/error');

const findUsers = () => {
  return User.find();
};

const findUserByProperty = (key, value) => {
  if (key === '_id') {
    if (mongoose.isValidObjectId(value)) {
      return User.findById(value);
    }
    throw error('User Id is not valid MongoDB Object Id', 400);
  }

  return User.findOne({ [key]: value });
};

const createNewUser = ({ name, email, password, roles, accountStatus }) => {
  const user = new User({
    name,
    email,
    password,
    roles: roles ?? ['STUDENT'],
    accountStatus: accountStatus ?? 'PENDING',
  });

  return user.save();
};

const updateUser = async (id, data) => {
  const user = await findUserByProperty('email', data.email);
  if (user) throw error('Email already in use!', 400);

  if (!mongoose.isValidObjectId(id)) {
    throw error('User Id is not valid MongoDB Object Id', 400);
  }

  return User.findByIdAndUpdate(id, { ...data }, { new: true });
};

module.exports = { findUsers, findUserByProperty, createNewUser, updateUser };
