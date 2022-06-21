#!/usr/bin/env node
import dialogWithPlayer from '../src/index.js';
import getRandomMathExpressionAndResult from '../src/getRandomMathExpressionAndResult.js';
import getUserNameAndGreedHim from '../src/getUserNameAndGreedHim.js';
import getArraysOfQuestionsAndResults from '../src/getArraysOfQuestionsAndResults.js';

// Let's welcome user, ask his name and introduce the game
const name = getUserNameAndGreedHim('What is the result of the expression?');

// Let's make arrays for the game
const [questions, results] = getArraysOfQuestionsAndResults(getRandomMathExpressionAndResult);

// Let's call our game engine!
dialogWithPlayer(questions, results, name);
