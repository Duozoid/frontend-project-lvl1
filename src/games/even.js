import playGame from '../game-helper.js';
import getRandomNumber from '../getRandomNumber.js';

const generateBrainEvenQuestion = () => {
  const question = getRandomNumber(1, 30);
  return [question, question % 2 === 0 ? 'yes' : 'no'];
};

const evenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => playGame(evenQuestion, generateBrainEvenQuestion);

export default brainEven;

