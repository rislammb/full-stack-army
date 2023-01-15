const mongoose = require('mongoose');

function connectDB(connectionStr) {
  return mongoose.connect(connectionStr, { serverSelectionTimeoutMS: 3000 });
}

module.exports = connectDB;
