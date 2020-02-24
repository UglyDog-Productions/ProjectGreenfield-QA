const path = require('path');
const fs = require('fs');
const csv = require('fast-csv');
const faker = require('faker');

const headers = [
  'id',
  'question_id',
  'body',
  'date_written',
  'answerer_name',
  'answerer_email',
  'reported',
  'helpful'
];

const makeRow = (id = 1) => {
  const row = [
    id,
    faker.random.number({ min: 1, max: 100000 }),
    faker.lorem.words(4),
    faker.date.between(2015, 2019),
    faker.internet.userName(),
    faker.internet.email(),
    faker.random.number(1),
    faker.random.number({ min: 0, max: 10 })
  ];
  return row;
};

const myOptions = {
  headers: true,
  quoteHeaders: false,
  quoteColumns: {
    body: true,
    date_written: false,
    asker_name: true,
    asker_email: true
  }
};

const csvPath = path.resolve(__dirname, 'dummyData', 'fakeAnswers.csv');
const writeableStream = fs.createWriteStream(csvPath);
const csvReadableStream = csv.format(myOptions);
csvReadableStream.pipe(writeableStream);

let i = 0;
csvReadableStream.write(headers);
function myWrite() {
  if (i++ < 10000000) {
    const res = csvReadableStream.write(makeRow(i));
    if (!res) {
      csvReadableStream.on('drain', myWrite);
    } else {
      process.nextTick(myWrite);
    }
    console.log(`Done${i} ${res}\r\n`);
  }
}
myWrite();
