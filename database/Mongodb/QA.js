const mongoose = require('mongoose');
// const db = require('./index.js');
// mongoose.Promise = global.Promise;

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

// export default QA;
module.exports = QA;

const blogSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    imageUrl: String,
    body: String,
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
