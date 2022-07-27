const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1>Hello world!</h1>');
    res.statusCode = 200;
    res.end();
  } else if (req.url === '/hello') {
    res.write('<h1>Hello Guest</h1>');
    res.statusCode = 200;
    res.end();
  } else {
    res.write('<h1>404 Not Found</h1>');
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8080, () => console.log('Server listening on port 8080'));