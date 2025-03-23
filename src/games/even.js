import { randomNum } from '../helpers/random.js';

// even func
export const gameMessage =
  'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => number % 2 === 0;

export const gameSettings = () => {
  const number = randomNum(1, 50);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
