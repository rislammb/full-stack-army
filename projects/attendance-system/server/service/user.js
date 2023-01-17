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

const createNewUser = ({ name, email, password }) => {
  const user = new User({ name, email, password });
  return user.save();
};

module.exports = { findUsers, findUserByProperty, createNewUser };
