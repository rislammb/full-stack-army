const express = require('express');
const { homeController } = require('./controller');

const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalMiddleware);
app.use(require('./routes'));

app.get('/', localMiddleware, homeController);

app.use((_req, _res, next) => {
  const error = new Error('<h2>404 Not Found!</h2>');
  error.status = 404;
  next(error);
});

app.use((err, _req, res, _next) => {
  console.log('Error', err);
  if (err.status) {
    return res.status(err.status).send(err.message);
  } else res.status(500).send('<h2>Somthing went wrong!</h2>');
});

function globalMiddleware(req, res, next) {
  console.log(`${req.method}: ${req.url} - global middleware`);
  if (req.query.bad) {
    return res.status(400).send('<h2>Bad request!</h2>');
  } else next();
}

function localMiddleware(req, res, next) {
  console.log(`local middleware`);
  next();
}

app.listen(4000, () => console.log('Server listening on port 4000'));
