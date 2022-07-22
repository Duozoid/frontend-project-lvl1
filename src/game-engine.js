import readlineSync from 'readline-sync';

export const roundCount = 3;

const greetingName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log((`Hello, ${name}!`));
};


const playGame = (gameQuestion, generateQuestion) => {
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
