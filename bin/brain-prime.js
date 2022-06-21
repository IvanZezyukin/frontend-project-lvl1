#!/usr/bin/env node
import dialogWithPlayer from '../src/index.js';
import getRandomPrimeExpression from '../src/getRandomPrimeExpression.js';
import getUserNameAndGreedHim from '../src/getUserNameAndGreedHim.js';
import getArraysOfQuestionsAndResults from '../src/getArraysOfQuestionsAndResults.js';

// Let's welcome user, ask his name and introduce the game
const name = getUserNameAndGreedHim('Answer "yes" if given number is prime. Otherwise answer "no".');

// Let's make arrays for the game
const [questions, results] = getArraysOfQuestionsAndResults(getRandomPrimeExpression);

// Let's call our game engine!
dialogWithPlayer(questions, results, name);
