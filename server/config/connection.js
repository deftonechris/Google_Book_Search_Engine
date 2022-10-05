const mongoose = require('mongoose');
require('dotenv').config();

// added new database
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://localhost:27017/book_search",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
