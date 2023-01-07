const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/mongo-demo', {
    serverSelectionTimeoutMS: 1500,
  })
  .then(() => console.log('Database connected'))
  .catch((e) => console.log(e))
  .finally(() => mongoose.connection.close());
