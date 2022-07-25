import playGame, { roundCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const operators = ['+', '-', '*'];
const rulesMessage = 'What is the result of the expression?';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return ,[`${firstNumber} + ${secondNumber}`, String(firstNumber + secondNumber)];
    case '-':
      return [`${firstNumber} - ${secondNumber}`, String(firstNumber - secondNumber)];
    case '*':
      return [`${firstNumber} * ${secondNumber}`, String(firstNumber * secondNumber)];
    default:
      return console.error(`Operator ${operator} doesn't supported`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  const operator = operators[getRandomNumber(0, 3)];
  return calculate(firstNumber, secondNumber, operator);
};

const brainCalc = () => playGame(rulesMessage, generateRound);

export default brainCalc;