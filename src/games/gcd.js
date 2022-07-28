import playGame, { roundCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGCD = (x, y) => (x !== 0 ? findGCD(y % x, x) : y);

const brainDivisorGame = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    const firstNumber = getRandomNumber(2, 20); 
    const secondNumber = getRandomNumber(2, 10);
    const question = `${firstNumber} ${secondNumber}`; 
    const answer = findGCD(firstNumber, secondNumber);
    rounds.push([question, String(answer)]);
  }
  playGame(rounds, rules);
};
export default brainDivisorGame;
