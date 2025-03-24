export const randomNum = (min, max) => {
  return Math.floor(Math.random() * (min + max) + min);
};

export const randomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};
