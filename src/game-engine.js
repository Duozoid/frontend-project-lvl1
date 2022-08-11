import readLineSync from 'readline-sync';

export const roundsCount = 3;

const playGame = (rounds, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = rounds[i];

    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: '); // читаем ответ
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default playGame;
