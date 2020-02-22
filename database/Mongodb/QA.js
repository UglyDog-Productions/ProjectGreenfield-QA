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
              url: String
            })
          ]
        },
        { timestamps: { createdAt: 'date' } }
      )
    ]
  },
  { timestamps: { createdAt: 'date' } }
);

const QA = mongoose.model('QA', questionsAndAnswersSchema);

// matches the csv data structure
const questionSchema = new mongoose.Schema(
  {
    id: Number,
    product_id: Number,
    body: String,
    date_wrtitten: Date,
    asker_name: String,
    asker_email: String,
    reported: Number,
    helpful: Number
  },
  { timestamps: { createdAt: 'date_written' } }
);

const Questions = mongoose.model('Questions', questionSchema);
const Test = mongoose.model('Test', questionSchema);

const answerSchema = new mongoose.Schema(
  {
    id: Number,
    question_id: Number,
    body: String,
    date_wrtitten: Date,
    answerer_name: String,
    answerer_email: String,
    reported: Number,
    helpful: Number
  },
  { timestamps: { createdAt: 'date_written' } }
);

const Answers = mongoose.model('Answers', answerSchema);

const photoSchema = new mongoose.Schema({
  id: Number,
  answer_id: Number,
  url: String
});

const Photos = mongoose.model('Photos', photoSchema);

module.exports = {
  QA,
  Test,
  Questions,
  Answers,
  Photos
};
