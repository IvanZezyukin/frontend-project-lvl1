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
  for (let i = 0; i < questions.length; i += 1) {
    if (questionForPlayer(questions[i], results[i], name)) {
      countOfRightAnswers += 1;
    } else {
      break;
    }
  }
  if (countOfRightAnswers === questions.length) {
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

const getArraysOfQuestionsAndResults = (gameFunction) => {
  const questions = [];
  const results = [];
  const quantityOfQuestions = 3;
  for (let i = 0; i < quantityOfQuestions; i += 1) {
    const [question, result] = gameFunction();
    questions.push(question);
    results.push(result);
  }
  return [questions, results];
};

const gameEngine = (gameStatement, gameFunction) => {
  // Let's welcome user, ask his name and introduce the game
  const name = getUserNameAndGreedHim(gameStatement);
  // Let's make arrays for the game
  const [questions, results] = getArraysOfQuestionsAndResults(gameFunction);
  // Let's make dialog with a gamer!
  dialogWithPlayer(questions, results, name);
};

export default gameEngine;
