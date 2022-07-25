import playGame, { roundCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const arr = ['+', '-', '*']; 
const message = 'What is the result of the expression?';

const calculate = (operation, firstNumber, secondNumber) => {
  switch (operation) { 
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
     throw new Error("Operator ${operator} doesn't supported");
  }
};


const brainCalc = () => {
  const arrGame = [];
  for (let i = 0; i < roundCount; i += 1) {
    const firstNumber = getRandomNumber(1, 10); 
    const secondNumber = getRandomNumber(1, 10);
    const operation = arr[getRandomNumber(0, arr.length - 1)]; 
    const answer = calculate(operation, firstNumber, secondNumber);
    const task = `${firstNumber} ${operation} ${secondNumber}`; 
    arrGame.push([task, String(answer)]);
  }
  playGame(arrGame, message);
};
export default brainCalc;
