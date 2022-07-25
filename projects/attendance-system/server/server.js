const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'Thank you' })
})

app.get('/private', (req, res) => {
  console.log(req.headers);
  return res.json({ message: 'private' })
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));