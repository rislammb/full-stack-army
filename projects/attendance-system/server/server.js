const express = require('express');
const bcrypt = require('bcryptjs');

const connectDB = require('./db');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.post('/register', async (req, res, next) => {
  const { name, email, password, accountStatus } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exist!' });
    }

    user = new User({ name, email, password, accountStatus });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (e) {
    next(e);
  }
});

app.post('/login', async (req, res, next) => {
  /**
   * start
  token = generate token using user info
  return token
  end
   */

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials!' });
    }

    delete user._doc.password;
    res.status(200).json({ message: 'Login Successfull', user });
  } catch (e) {
    next(e);
  }
});

app.get('/', (_req, res) => {
  res.json({ message: 'Thank you' });
});

app.use((err, _req, res, _next) => {
  console.log(err);
  res.status(500).json({ message: 'Server error occurred!' });
});

connectDB('mongodb://localhost:27017/attendace-db')
  .then(() => {
    console.log('Database Connected..');
    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch((e) => console.log(e));
