import playGame from '../game-helper.js';
import getRandomNumber from '../getRandomNumber.js';

  const isEven = (number) => (number % 2 === 0);

  const generateProgressionQuestion = () => {
    const question = getRandomNumber(1, 30);
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };
  
  const brainEven = () => {
    const rulesMessage = 'Answer "yes" if given number is even. Otherwise answer "no".';
    const roundsCount = 3;
    playGame(roundsCount, rulesMessage, generateProgressionQuestion)
    };

    export default brainEven;

