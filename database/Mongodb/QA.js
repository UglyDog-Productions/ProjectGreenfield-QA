const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const questionsAndAnswersSchema = new mongoose.Schema(
  {
    id: Number,
    body: String,
    name: String,
    email: String,
    helpfulness: Number,
    reported: Number,
    answers: [
      new mongoose.Schema(
        {
          id: Number,
          body: String,
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
// QA.answers = answers

// export default QA;
module.exports = QA;
