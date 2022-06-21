import getAnswerFromUser from './cli.js';

const getUserNameAndGreedHim = (gameStatement) => {
  // Let's welcome user, ask his name and introduce the game
  console.log('Welcome to the Brain Games!');
  const name = getAnswerFromUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameStatement);
  return name;
};

export default getUserNameAndGreedHim;
