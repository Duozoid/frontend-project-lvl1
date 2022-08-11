import playGame, { roundsCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = String(getRandomNumber(1, 100));
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => {
  const rounds = [];
  for (let i = 1; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  playGame(rounds, rules);
};

export default brainPrime;