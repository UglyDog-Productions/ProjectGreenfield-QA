const QandA = require('./QA.js');

const { Questions, Answers, Photos, Test } = QandA;
let questionCount = 1;

const findQuestions = async (productId) => {
  try {
    const result = await Questions.find({ product_id: productId }).sort({
      helpful: -1
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const addQuestion = async (productId, body, name, email) => {
  console.log('adding question.....');

  const addOne = await Questions.create({
    id: questionCount++,
    product_id: productId,
    body,
    asker_name: name,
    asker_email: email,
    reported: 0,
    helpful: 0
  });
  console.log(`question added, id: ${questionCount}`);
};

// replicate mongoDB -> db.tests.update( { "id": 1 }, { $inc: { "helpful": 1 } })
const helpfulQ = async (questionId) => {
  console.log(`marking question ${questionId} helpful....`);

  const increment = await Questions.updateOne(
    { id: questionId },
    { $inc: { helpful: 1 } }
  );
  console.log(`question ${questionId} marked helpful`);
};

const reportQ = async (questionId) => {
  console.log(`reporting question ${questionId}`);

  const report = await await Questions.updateOne(
    { id: questionId },
    { reported: 1 }
  );
  console.log(`question ${questionId} reported`);
};

// replicate mongoDB -> db.answers.find({"question_id":1}).sort({ "helpful": -1 })
const findAnswers = async (questionId) => {
  try {
    const result = await Answers.find({ question_id: questionId }).sort({
      helpful: -1
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findQuestions,
  addQuestion,
  helpfulQ,
  reportQ,
  findAnswers
};
