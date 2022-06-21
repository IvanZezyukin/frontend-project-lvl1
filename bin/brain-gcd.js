#!/usr/bin/env node
import dialogWithPlayer from '../src/index.js';
import getRandomGCDexpression from '../src/getRandomGCDexpression.js';
import getUserNameAndGreedHim from '../src/getUserNameAndGreedHim.js';
import getArraysOfQuestionsAndResults from '../src/getArraysOfQuestionsAndResults.js';

// Let's welcome user, ask his name and introduce the game
const name = getUserNameAndGreedHim('Find the greatest common divisor of given numbers.');

// Let's make arrays for the game
const [questions, results] = getArraysOfQuestionsAndResults(getRandomGCDexpression);

// Let's call our game engine!
dialogWithPlayer(questions, results, name);
