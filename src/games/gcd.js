import playGame, { roundsCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGCD = (x, y) => (x !== 0 ? findGCD(y % x, x) : y);

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 50); 
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`; 
  const answer = findGCD(firstNumber, secondNumber);
  return [question, String(answer)]
};

const brainGCD = () => { 
  const rounds = [] 
  for (let i = 0; i < roundsCount; i += 1) { 
    rounds.push(generateRound()) 
  } 
  playGame(rounds, rules);
  }
  
  export default brainGCD;
