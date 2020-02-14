const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/QA';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is up');
});

module.exports = db;
