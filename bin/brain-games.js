#!/usr/bin/env node
import getAnswerFromUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getAnswerFromUser('Please, write your name right here: ');
console.log(`Hello, ${name}!`);
