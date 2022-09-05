import playGame, { roundsCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const operators = ['+', '-', '*'];
const rules = 'What is the result of the expression?';

const calculate = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Operator - ${operation} does not supported');
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operation = operators[getRandomNumber(0, operators.length - 1)];
  const answer = String(calculate(operation, firstNumber, secondNumber));
  const task = `${firstNumber} ${operation} ${secondNumber}`;
  return [task, answer];
};

const runBrainCalcGame  = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  playGame(rounds, rules);
};

export default runBrainCalcGame ;
