const express = require('express');

const connectDB = require('./db');
const routes = require('./routes/index');
const authenticate = require('./middleware/authenticate');

const app = express();
app.use(express.json());
app.use(routes);

app.get('/private', authenticate, (req, res) => {
  console.log('req user', req.user);

  res.status(200).json({ message: 'I am private route' });
});

app.get('/public', (req, res) => {
  res.status(200).json({ message: 'I am public route' });
});

app.get('/', (_req, res) => {
  res.json({ message: 'Thank you' });
});

app.use((err, _req, res, _next) => {
  console.log('Error from global: ', err);
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? 'Server error occurred!' });
});

connectDB('mongodb://localhost:27017/attendace-db')
  .then(() => {
    console.log('Database Connected..');
    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch((e) => console.log(e));
