const fs = require('fs');

exports.homeController = (_req, res) => {
  fs.readFile('./pages/index.html', (err, data) => {
    if (err) {
      res.send('<h2>Something went wrong!</h2>');
    } else {
      res.write(data);
      res.end();
    }
  });
};

exports.aboutController = (_req, res) => {
  fs.readFile('./pages/about.html', (err, data) => {
    if (err) {
      res.send('<h2>Something went wrong!</h2>');
    } else {
      res.write(data);
      res.end();
    }
  });
};

exports.helpController = (_req, res) => {
  fs.readFile('./pages/help.html', (err, data) => {
    if (err) {
      res.send('<h2>Something went wrong!</h2>');
    } else {
      res.write(data);
      res.end();
    }
  });
};
