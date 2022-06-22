#!/usr/bin/env node
import getRandomMathExpressionAndResult from '../src/getRandomMathExpressionAndResult.js';
import gameEngine from '../src/index.js';

// Let's call our game engine!
gameEngine('What is the result of the expression?', getRandomMathExpressionAndResult);
