const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/QandA';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('database is up'));

module.exports = db;
