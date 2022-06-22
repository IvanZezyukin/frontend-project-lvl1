#!/usr/bin/env node
import getRandomPrimeExpression from '../src/getRandomPrimeExpression.js';
import gameEngine from '../src/index.js';

// Let's call our game engine!
gameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', getRandomPrimeExpression);
