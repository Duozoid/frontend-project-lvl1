import playGame from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getGreatestCommonDivisor = (num1, num2) => {
    const maxNum = num1 > num2 ? num1 : num2;
    const minNum = num1 < num2 ? num1 : num2;
    if (maxNum % minNum === 0) {
      return minNum;
    }
    return getGreatestCommonDivisor(minNum, maxNum % minNum);
  };

const generateQuestion = () => {
  
    const minNumber = 1;
    const maxNumber = 30;
    const num1 = getRandomNumber(minNumber, maxNumber);
    const num2 = getRandomNumber(minNumber, maxNumber);
    const question = `${num1} ${num2}`;
    const correctAnswer = getGreatestCommonDivisor(num1, num2);
  return [question, String(correctAnswer)];
  };
  
  const brainDivisorGame = () => {
    const roundsCount = 3;
    const rulesMessage = 'Find the greatest common divisor of given numbers.';
    playGame(roundsCount, rulesMessage, generateQuestion);
  };

export default brainDivisorGame;
