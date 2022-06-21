#!/usr/bin/env node
import dialogWithPlayer from '../src/index.js';
import getAnswerFromUser from '../src/cli.js';
import getRandomGCDexpression from '../src/getRandomGCDexpression.js';

// Let's welcome user, ask his name and introduce the game
console.log('Welcome to the Brain Games!');
const name = getAnswerFromUser('Please, write your name right here: ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

// Let's make arrays for the game
const questions = [];
const results = [];
for (let i = 0; i < 3; i += 1) {
  let [x, y, result] = getRandomGCDexpression();
  questions.push(`${x} ${y}`);
  results.push(`${result}`);
}

// Let's call our game engine!
dialogWithPlayer(questions, results, name);
