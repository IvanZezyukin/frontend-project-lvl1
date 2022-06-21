#!/usr/bin/env node
import dialogWithPlayer from '../src/index.js';
import getRandomEvenExpression from '../src/getRandomEvenExpression.js';
import getUserNameAndGreedHim from '../src/getUserNameAndGreedHim.js';
import getArraysOfQuestionsAndResults from '../src/getArraysOfQuestionsAndResults.js';

// Let's welcome user, ask his name and introduce the game
const name = getUserNameAndGreedHim('Answer "yes" if the number is even, otherwise answer "no".');

// Let's make arrays for the game
const [questions, results] = getArraysOfQuestionsAndResults(getRandomEvenExpression);

// Let's call our game engine!
dialogWithPlayer(questions, results, name);
