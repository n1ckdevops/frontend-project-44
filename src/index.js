import readlineSync from 'readline-sync';
import welcomeMessage from './cli.js';

// GAME LOGIC OF ALL 5 GAMES.

export const startGame = (gameSettings, gameMessage) => {
  let counter = 0;
  const userName = welcomeMessage();
  console.log(gameMessage);
  while (counter < 3) {
    const [question, correctAnswer] = gameSettings();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter++;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${userName}`
      );
      break;
    }
  }
  counter === 3 ? console.log(`Congratulations, ${userName}`) : null;
};
// we did the game!!
// yes, i should not have taken help from gpt, but still, that was a bit
// now you know and I DO know how and why sth HERE might NOT work properly
// GOOD LUCK!
