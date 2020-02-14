const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/myapp';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is up');
});

module.exports = db;
