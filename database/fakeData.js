/*
To create dummy data
id, product_id, body, date_written, asker_name, asker_email, reported, helpful
1,1,"What fabric is the top made of?","2018-01-04","yankeelover","first.last@gmail.com",0,1

*/

const faker = require('faker');
const path = require('path');
const fs = require('fs');

const questionHeaders = [
  'id',
  'product_id',
  'body',
  'date_written',
  'asker_name',
  'asker_email',
  'reported',
  'helpful'
];

const answerHeaders = [
  'id',
  'question_id',
  'body',
  'date_written',
  'answerer_name',
  'answerer_email',
  'reported',
  'helpful'
];
const photoHeaders = ['id', 'answer_id', 'url'];

const question = `${faker.lorem.words(4)}?`; // Maxime beatae est.
const answer = faker.lorem.sentence(4); // If we transmit the system, we can get to the JBOD monitor through the cross-platform JSON sensor!
const email = faker.internet.email(); // Kassandra.Haley@erich.biz
const username = faker.internet.userName(); // Lenora90
const url = faker.image.imageUrl(100, 100); // http://lorempixel.com/100/100
const date = faker.date.between(2015, 2019); // 2015-11-22T18:47:25.333Z
const reported = faker.random.number(1); // 0 or 1
const helpful = faker.random.number({ min: 0, max: 10 }); // 0, 5, 9, etc...

const test = faker.date.between(1, 2);

console.log(test);
