import { randomNum } from '../helpers/random.js';

export const gameMessage = 'Find the greatest common divisor of given numbers.';

export const gameSettings = () => {
  let num1 = randomNum(1, 30);
  let num2 = randomNum(1, 30);
  const question = `Question: ${num1} ${num2}`;
  let correctAnswer;
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  correctAnswer = num1;
  return [question, correctAnswer.toString()];
};
