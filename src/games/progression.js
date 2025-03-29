import { randomNum } from '../helpers/random.js';

export const gameMessage = 'What number is missing in the progression?';

export const gameSettings = () => {
  const initNum = randomNum(1, 50);
  const length = randomNum(5, 10);
  const step = randomNum(1, 10);
  const missingNum = randomNum(0, length - 1);
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(initNum + i * step);
  }
  const correctAnswer = result[missingNum];
  result[missingNum] = '..';
  const question = `Question: ${result.join(' ')}`;
  return [question, correctAnswer.toString()];
};
