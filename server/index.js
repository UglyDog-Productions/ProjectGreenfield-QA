const newrelic = require('newrelic');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/Mongodb/index.js');
const Queries = require('../database/Mongodb/queries.js');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));
const port = 3000;

const { findQuestions, findAnswers, addQuestion, helpfulQ, reportQ } = Queries;

app.get('/qa/:productId', async (req, res) => {
  const { productId } = req.params;
  console.log(`received GET request for productId: ${productId}`);
  // console.time('processing time');

  try {
    const querydb = await findQuestions(productId);
    // console.timeEnd('processing time');
    res.status(200);
    res.send(querydb);
  } catch (error) {
    console.error(error);
    res.status(404);
    res.send(error);
  }
});

app.get('/qa/:questionId/answers', async (req, res) => {
  const { questionId } = req.params;
  console.log(`received GET request for questionId: ${questionId}`);
  // console.time('processing time');

  try {
    const querydb = await findAnswers(questionId);
    // console.timeEnd('processing time');
    res.status(200);
    res.send(querydb);
  } catch (error) {
    console.error(error);
    res.status(404);
    res.send(error);
  }
});

app.post('/qa/:productId', async (req, res) => {
  const { productId } = req.params;
  const { body, name, email } = req.body;
  console.log(`received POST request for productId: ${productId}`);

  try {
    const addToDB = await addQuestion(productId, body, name, email);
    res.status(200);
    res.send('Your question has been added to the db');
  } catch (error) {
    console.error(error);
    res.status(404);
    res.send(error);
  }
});

app.put('/qa/question/:questionId/helpful', async (req, res) => {
  const { questionId } = req.params;
  console.log(`received PUT to mark question ${questionId} as helpful`);

  try {
    const inc = await helpfulQ(questionId);
    res.status(200);
    res.send(`Question ${questionId} marked as helpful`);
  } catch (error) {
    console.error(error);
    res.status(404);
    res.send(error);
  }
});

app.put('/qa/question/:questionId/report', async (req, res) => {
  const { questionId } = req.params;
  console.log(`received PUT to report question ${questionId}`);

  try {
    const report = await reportQ(questionId);
    res.status(200);
    res.send(`Question ${questionId} reported`);
  } catch (error) {
    console.error(error);
    res.status(404);
    res.send(error);
  }
});

app.delete('/qa', async (req, res) => {
  console.log('Received qa DELETE Request');
  res.send('Received qa DELETE Request');
});

app.listen(port, () => console.log(`listening on port ${port}!`));
