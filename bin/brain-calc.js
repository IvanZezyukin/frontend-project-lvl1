#!/usr/bin/env node
import dialogWithPlayer from '../src/index.js';
import getAnswerFromUser from '../src/cli.js';
import getRandomMathExpressionAndResult from '../src/getRandomMathExpressionAndResult.js';

// Let's welcome user, ask his name and introduce the game
console.log('Welcome to the Brain Games!');
const name = getAnswerFromUser('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

// Let's make arrays for the game
const questions = [];
const results = [];
for (let i = 0; i < 3; i += 1) {
  let [x, type, y, result] = getRandomMathExpressionAndResult();
  questions.push(`${x} ${type} ${y}`);
  results.push(`${result}`);
}

// Let's call our game engine!
dialogWithPlayer(questions, results, name);
