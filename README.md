Setup:
install node dependencies: npm install

Recommended Extensions:
Install ESLint
Intall Prettier

Generate Dummy Data:
Generate 10M question records: node database/writeQuestionFiles.js
Generate 10M answer records: node database/writeAnswerFiles.js

Populate mongoDB:
import questions: mongoimport --type csv -d QandA -c questions --headerline --drop fakeQuestions.csv
import answers: mongoimport --type csv -d QandA -c answers --headerline --drop fakeAnswers.csv

Scripts:
to start client live-server run: npm start
to start webpack run: npm run react-dev
to start both server and webpack: npm run dev:start

to start server:
npm run express
nodemon: ./node_modules/.bin/nodemon server/index.js
