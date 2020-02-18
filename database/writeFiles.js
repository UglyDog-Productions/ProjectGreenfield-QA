/*
csv: A comma-separated values file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas. The use of the comma as a field separator is the source of the name for this file format

for example:
id, product_id, body, date_written, asker_name, asker_email, reported, helpful
1,1,"What fabric is the top made of?","2018-01-04","yankeelover","first.last@gmail.com",0,1
2,1,"HEY THIS IS A WEIRD QUESTION!!!!?","2019-04-28","jbilas","first.last@gmail.com",1,4
3,1,"Does this product run big or small?","2019-01-17","jbilas","first.last@gmail.com",0,8
4,1,"How long does it last?","2019-07-06","funnygirl","first.last@gmail.com",0,6
5,1,"Can I wash it?","2018-02-08","cleopatra","first.last@gmail.com",0,7
6,1,"Is it noise cancelling?","2018-08-12","coolkid","first.last@gmail.com",1,19
7,2,"Where is this product made?","2018-01-24","iluvcatz","first.last@gmail.com",0,0
8,2,"Is this product sustainable?","2018-07-12","coolkid","first.last@gmail.com",1,5
9,2,"I'm allergic to dye #17, does this product contain any?","2019-01-24","l33tgamer","first.last@gmail.com",0,6
10,2,"Why is this product cheaper here than other sites?","2018-04-24","toofast","first.last@gmail.com",0,5

[ 'id', 'product_id', 'body', 'date_written', 'asker_name', 'asker_email', 'reported', 'helpful' ]

*/
const csv = require('fast-csv');
const path = require('path');
const fs = require('fs');

const headers = [
  'id',
  'product_id',
  'body',
  'date_written',
  'asker_name',
  'asker_email',
  'reported',
  'helpful'
];
const row = [
  1,
  1,
  'What fabric is the top made of?',
  '2018-01-04',
  'yankeelover',
  'first.last@gmail.com',
  0,
  1
];
const rowTwo = [
  2,
  1,
  'HEY THIS IS A WEIRD QUESTION!!!!?',
  '2019-04-28',
  'jbilas',
  'first.last@gmail.com',
  1,
  4
];

const myOptions = {
  headers: true,
  quoteHeaders: false,
  quoteColumns: {
    body: true,
    date_written: true,
    asker_name: true,
    asker_email: true
  }
};

const myPath = path.resolve(__dirname, 'dummyData', 'options.csv');
csv
  .writeToPath(myPath, [headers, row, rowTwo], myOptions)
  .on('error', (err) => console.error(err))
  .on('finish', () => console.log('Done writing.'));

// const stream = fs.createWriteStream(
//   path.resolve(__dirname, 'dummyData', 'options.csv')
// );

// csv.writeToStream(stream, [headers, row, rowTwo], myOptions);
// .on --> event handler
