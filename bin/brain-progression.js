#!/usr/bin/env node
import dialogWithPlayer from '../src/index.js';
import getRandomArithmeticProgression from '../src/getRandomArithmeticProgression.js';
import getUserNameAndGreedHim from '../src/getUserNameAndGreedHim.js';
import getArraysOfQuestionsAndResults from '../src/getArraysOfQuestionsAndResults.js';

// Let's welcome user, ask his name and introduce the game
const name = getUserNameAndGreedHim('What number is missing in the progression?');

// Let's make arrays for the game
const [questions, results] = getArraysOfQuestionsAndResults(getRandomArithmeticProgression);

// Let's call our game engine!
dialogWithPlayer(questions, results, name);
