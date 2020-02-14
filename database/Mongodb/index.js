const mongoose = require('mongoose');

const url = 'http://52.26.193.201:3000'; // .../products/list
// const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/ProjectGreenfieldQA', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is up');
});

const questionsAndAnswersSchema = new mongoose.Schema(
  {
    id: Number,
    body: String,
    // date: Date,
    name: String,
    email: String,
    helpfulness: Number,
    reported: Number,
    answers: [
      new mongoose.Schema(
        {
          id: Number,
          body: String,
          // date: Date,
          name: String,
          email: String,
          helpfulness: Number,
          reported: Number,
          photos: [
            new mongoose.Schema({
              id: Number,
              url: String,
            }),
          ],
        },
        { timestamps: { createdAt: 'date' } },
      ),
    ],
  },
  { timestamps: { createdAt: 'date' } },
);

const QA = mongoose.model('QA', questionsAndAnswersSchema);

export default QA;
