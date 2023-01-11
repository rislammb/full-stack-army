const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  fs.readFile('./pages/index.html', (err, data) => {
    if (err) {
      res.send('<h2>Something went wrong!</h2>');
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.get('/about', (req, res) => {
  res.send('About route');
});

app.get('/help', (req, res) => {
  res.send('Help route');
});

app.listen(4000, () => console.log('Server listening on port 4000'));
