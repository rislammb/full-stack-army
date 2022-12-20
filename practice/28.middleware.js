const express = require('express');

const app = express();

// middleware for serve static folder
app.use(express.static(__dirname + '/public'));

const simpleLogger = (req, res, next) => {
  console.log(`${req.method}: ${req.url} - ${new Date().toISOString()}`);
  next();
};

const secondMiddleWare = (req, res, next) => {
  console.log('second middle ware');
  next();
};

const queryCheck = (req, res, next) => {
  const name = req.query.name;
  if (name === 'bad') {
    return res.json({ message: 'Bad request' });
  } else next();
};

// local middleware
app.get('/hello', queryCheck, (_req, res) => {
  res.json({ message: 'hello' });
});

// // global middleware - use one middileware
// app.use(simpleLogger);

// global middleware - use more than one middilewares
app.use([simpleLogger, secondMiddleWare]);

app.get('/', (_req, res) => {
  res.json({ message: 'home' });
});

app.listen(5000, () => console.log('server listening on port 5000'));
