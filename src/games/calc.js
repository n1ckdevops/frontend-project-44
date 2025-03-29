import { randomNum, randomOperator } from '../helpers/random.js';

export const gameMessage = 'What is the result of the expression?';

export const gameSettings = () => {
  const num1 = randomNum(1, 10);
  const num2 = randomNum(1, 10);
  const operator = randomOperator();
  const question = `Question: ${num1} ${operator} ${num2}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
  return [question, correctAnswer.toString()];
};
