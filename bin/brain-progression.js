#!/usr/bin/env node
import getRandomArithmeticProgression from '../src/getRandomArithmeticProgression.js';
import gameEngine from '../src/index.js';

// Let's call our game engine!
gameEngine('What number is missing in the progression?', getRandomArithmeticProgression);
