#!/usr/bin/env node
import _ from 'lodash';
import getAnswerFromUser from '../src/cli.js';

let countOfRightAnswers = 0;
console.log('Welcome to the Brain Games!');
const name = getAnswerFromUser('Please, write your name right here: ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const randomNumber = _.random(1, 100);
  console.log(`Question: ${randomNumber}`);
  const answer = getAnswerFromUser('Your answer: ');
  if (!(answer === 'no' || answer === 'yes')) {
    console.log('Please, type in just "yes" or "no"...');
    break;
  }
  if (randomNumber % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    countOfRightAnswers += 1;
  }
  if (randomNumber % 2 !== 0 && answer === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${name}`);
    break;
  }
  if (randomNumber % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    countOfRightAnswers += 1;
  }
  if (randomNumber % 2 === 0 && answer === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    console.log(`Let's try again, ${name}`);
    break;
  }
}
if (countOfRightAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
