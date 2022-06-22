#!/usr/bin/env node
import getRandomGCDexpression from '../src/getRandomGCDexpression.js';
import gameEngine from '../src/index.js';

// Let's call our game engine!
gameEngine('Find the greatest common divisor of given numbers.', getRandomGCDexpression);
