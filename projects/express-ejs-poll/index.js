const express = require('express');
const mongoose = require('mongoose');
const {
  pollGetController,
  pollPostController,
  getAllPolls,
  getSinglePoll,
  postSinglePoll,
  deletePoll,
} = require('./pollControllers');

const app = express();
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (_req, res) => res.render('home'));
app.get('/create', pollGetController);
app.post('/create', pollPostController);

app.get('/polls', getAllPolls);
app.post('/polls/:pollId/delete', deletePoll);
app.get('/polls/:pollId', getSinglePoll);
app.post('/polls/:pollId', postSinglePoll);

mongoose
  .connect(process.env.NODE_MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    const port = process.env.PORT || 3333;
    app.listen(port, () => console.log(`server listening on port ${port}`));
  })
  .catch((e) => console.log(e));
