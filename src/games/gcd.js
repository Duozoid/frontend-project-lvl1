import playGame, { roundCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const findGCD = (x, y) => (x !== 0 ? findGCD(y % x, x) : y);

const brainDivisorGame = () => {
  const arrGame = [];
  for (let i = 0; i < roundCount; i += 1) {
    const firstNumber = getRandomNumber(2, 20); 
    const secondNumber = getRandomNumber(2, 10);
    const question = `${firstNumber} ${secondNumber}`; 
    const answer = findGCD(firstNumber, secondNumber);
    arrGame.push([question, String(answer)]);
  }
  playGame(arrGame, rulesMessage);
};
export default brainDivisorGame;
