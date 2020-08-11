let rightAnswer = 0;
let totalQuestion = 0;
const questions = [];

function start() {
  askQuestion();
}

function askQuestion() {
  const question = questions.pop();
  console.log(question);
}
