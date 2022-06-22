#!/usr/bin/env node
import getRandomEvenExpression from '../src/getRandomEvenExpression.js';
import gameEngine from '../src/index.js';

// Let's call our game engine!
gameEngine('Answer "yes" if the number is even, otherwise answer "no".', getRandomEvenExpression);
