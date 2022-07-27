const express = require('express');

const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    name: 'Personal Finance',
    price: 500
  },
  {
    id: 2,
    name: 'Javascript for Dummines',
    price: 1000
  },
  {
    id: 3,
    name: 'Javascript Definitive Guide',
    price: 1500
  },
  {
    id: 4,
    name: 'Personal Finance',
    price: 300
  },
];

app.get('/books', (req, res) => {
  if (req.query.show === 'all') {
    return res.json(books);
  }
  if (req.query.price == 500) {
    const result = books.filter(book => book.price <= 500);
    return res.json(result);
  }
  if (req.query.price == 1000) {
    const result = books.filter(book => book.price <= 1000);
    return res.json(result);
  }
  res.json(books);
});

app.post('/books', (req, res) => {
  const book = req.body;
  book.id = books.length + 1;
  books.push(book);

  res.json(books);
})

app.listen(8000, () => console.log('Server listening on port 8000'));