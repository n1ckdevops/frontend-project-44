#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomeMessage from '../src/cli.js';

const GAME_MESSAGE =
  'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const isPositive = 'yes';
const isNegative = 'no';

const isEven = (num) => num % 2 === 0;
const gameSettings = () => {
  const name = welcomeMessage();
  console.log(GAME_MESSAGE);
  let counter = 0;
  while (counter < 3) {
    const randomNum = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
    const question = `Question: ${randomNum}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(randomNum) ? isPositive : isNegative;
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter++;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

gameSettings();
