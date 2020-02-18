const seeder = require('mongoose-seed-csv');
// import { populateFromCSV, disconnect } from 'mongoose-seed-csv';
const path = require('path');
const QA = require('./QA.js');

seeder.populateFromCSV(
  [
    {
      path: path.resolve(__dirname, 'files', 'questions.csv'),
      model: 'QA',
      parseOptions: { columns: false }
    }
  ],
  function() {
    seeder.disconnect();
  }
);

// seeder.populateFromCSV(csvEntryArray, [csvParseOptions], [callback])

// const db = require('./index.js');
// const QA = require('./QA.js');
// const answerData = require('./files/answers.csv');

// const insertSampleData = function() {
//   QA.create(answerData).then(() => db.disconnect());
// };

// insertSampleData();
