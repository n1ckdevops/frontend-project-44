import readlineSync from "readline-sync";

const helloFunc = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}`);
  return name;
};

export default helloFunc;
