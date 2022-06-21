#!/usr/bin/env node
import getAnswerFromUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getAnswerFromUser('May I have your name? ');
console.log(`Hello, ${name}!`);
