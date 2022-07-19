import playGame from '../game-helper.js';
import getRandomNumber from '../getRandomNumber.js';

const makeExample = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return [`${firstNumber} + ${secondNumber}`, String(firstNumber + secondNumber)];
    case '-':
      return [`${firstNumber} - ${secondNumber}`, String(firstNumber - secondNumber)];
    case '*':
      return [`${firstNumber} * ${secondNumber}`, String(firstNumber * secondNumber)];
    default:
      return console.error(`Operator ${operator} doesn't supported`);
  }
};

const generateBrainCalcQuestion = () => {
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 3)];
  return makeExample(firstNumber, secondNumber, operator);
};

const rulesMessage = 'What is the result of the expression?';

const brainCalc = () => playGame(rulesMessage, generateBrainCalcQuestion);

export default brainCalc;