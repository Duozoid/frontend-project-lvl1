import playGame, { roundCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const forGame = [];
  for (let i = 0; i < roundCount; i += 1) {
    const question = getRandomNumber(1, 50);
    const answer = isEven(question) ? 'yes' : 'no';
    forGame.push([question, answer]);
  }
  playGame(forGame, rules);
};
export default brainEven;

