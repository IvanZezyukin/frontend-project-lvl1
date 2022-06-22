// This is the universal engine of all my brain games
// Designed for 3 question for a user
// Need to call with game statement and game function
import getAnswerFromUser from './cli.js';

const questionForPlayer = (gameFunction, name) => {
  const [question, result] = gameFunction();
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

const dialogWithPlayer = (gameFunction, name) => {
  let countOfRightAnswers = 0;
  const quantityOfQuestions = 3;
  for (let i = 0; i < quantityOfQuestions; i += 1) {
    if (questionForPlayer(gameFunction, name)) {
      countOfRightAnswers += 1;
    } else {
      break;
    }
  }
  if (countOfRightAnswers === quantityOfQuestions) {
    console.log(`Congratulations, ${name}!`);
  }
};

const getUserNameAndGreedHim = (gameStatement) => {
  console.log('Welcome to the Brain Games!');
  const name = getAnswerFromUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameStatement);
  return name;
};

const gameEngine = (gameStatement, gameFunction) => {
  // Let's welcome user, ask his name and introduce the game
  const name = getUserNameAndGreedHim(gameStatement);
  // Let's make dialog with a gamer!
  dialogWithPlayer(gameFunction, name);
};

export default gameEngine;
