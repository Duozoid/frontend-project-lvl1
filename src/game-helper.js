import readlineSync from 'readline-sync';
import greetingName from './cli.js';

const playGame = (gameQuestion, generateQuestion) => {
  const roundCount = 3;
  const name = greetingName();
  console.log(gameQuestion);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default playGame;
