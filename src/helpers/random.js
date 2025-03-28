export const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};
