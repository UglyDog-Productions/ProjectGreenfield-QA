const express = require('express');
const bodyParser = require('body-parser');
const Queries = require('../database/Mongodb/queries.js');

// GET /qa/:question_id/answers

const app = express();
app.use(bodyParser.json());

const { findQuestions } = Queries;

// /qa/:product_id <- query param

app.get('/qa/:productId', async (req, res) => {
  const { productId } = req.params;
  console.log(`productId: ${productId}`);

  try {
    const querydb = await findQuestions(productId);
    res.send(querydb);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get('/qa/:productId', async (req, res) => {
  const { productId } = req.params;
  console.log(`productId: ${productId}`);

  try {
    const querydb = await getQuestions(productId);
    res.send(querydb);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post('/qa', async (req, res) => {
  console.log('Received qa POST Request');
  res.send('Received qa POST Request');
});

app.put('/qa', async (req, res) => {
  console.log('Received qa PUT Request');
  res.send('Received qa PUT Request');
});

app.delete('/qa', async (req, res) => {
  console.log('Received qa DELETE Request');
  res.send('Received qa DELETE Request');
});
