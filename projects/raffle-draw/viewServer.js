const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.set('view engine', 'ejs');
app.use([
  morgan('dev'),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
  express.static('views'),
  (req, res, next) =>
    req.path.includes('.css')
      ? res.sendFile(__dirname + '/views/style.css')
      : next(),
]);

app.use('/tickets', require('./viewRoutes'));

app.get('/health', (_req, res) => {
  res.status(200).json({ message: 'Success' });
});

app.get('/', (_req, res) => {
  res.render('home');
});

app.use((_req, res, _next) => {
  const error = new Error('Resource Not Found!');
  error.status = 404;
  // next(error);
  res.render('not-found');
});

app.use((error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  } else res.status(500).json({ message: 'Somethings went wrong!' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
