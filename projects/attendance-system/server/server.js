const express = require('express');
const bcrypt = require('bcryptjs');

const connectDB = require('./db');
const User = require('./models/User');

const app = express();
app.use(express.json());

/**
  hash = hash password
  user = save name, email and hash to user model
  return 201
  end
 */
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: 'User already exist!' });
  }

  user = new User({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  await user.save();

  res.status(201).json({ message: 'User created successfully', user });
});

app.get('/', (_, res) => {
  res.json({ message: 'Thank you' });
});

app.get('/private', (req, res) => {
  console.log(req.headers);
  return res.json({ message: 'private' });
});

connectDB('mongodb://localhost:27017/attendace-db')
  .then(() => {
    console.log('Database Connected..');
    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch((e) => console.log(e));
