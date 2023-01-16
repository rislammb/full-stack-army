const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authenticate(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }

    const decoded = jwt.verify(token, 'secret-key');
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }

    req.user = user;
    next();
  } catch (e) {
    return res.status(400).json({ message: 'Invalid token!' });
  }
}

module.exports = authenticate;
