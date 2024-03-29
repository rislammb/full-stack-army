const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use([morgan('dev'), cors(), express.json()]);

app.use('/api/v1/tickets', require('./routes'));

app.get('/health', (_req, res) => {
  res.status(200).json({ message: 'Success' });
});

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Raffle Draw api home route' });
});

app.use((_req, _res, next) => {
  const error = new Error('Resource Not Found!');
  error.status = 404;
  next(error);
});

app.use((error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  } else res.status(500).json({ message: 'Somethings went wrong!' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
