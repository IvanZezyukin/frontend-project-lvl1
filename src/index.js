// This is the engine of all brain games
// Designed for 3 question for a user
// Need to call with name of a user and arrays of questions and answers
import getAnswerFromUser from './cli.js';

const questionForPlayer = (question, result, name) => {
  console.log(`Question: ${question}`);
  const answer = getAnswerFromUser('Your answer: ');
  if (answer === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
const dialogWithPlayer = (questions, results, name) => {
  let countOfRightAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    if (questionForPlayer(questions[i], results[i], name)) {
      countOfRightAnswers += 1;
    } else {
      break;
    }
  }
  if (countOfRightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default dialogWithPlayer;
