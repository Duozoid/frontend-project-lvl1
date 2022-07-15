import playGame from '../game-helper.js';
import getRandomNumber from '../getRandomNumber.js';

const generateProgression = (startNumber, stepCount, progressionLength) => {
    const progression = [];
    progression.push(startNumber);
    while (progression.length < progressionLength) {
      progression.push(progression[progression.length - 1] + stepCount);
    }
    return progression;
  };
  
  const generateProgressionQuestion = () => {
    const progression = generateProgression(
      getRandomNumber(0, 30),
      getRandomNumber(1, 15),
      getRandomNumber(5, 11),
    );
    const correctAnswer = progression[getRandomNumber(0, progression.length - 1)];
    progression[progression.indexOf(correctAnswer)] = '..';
    const question = progression.join(' ');
    return [question, String(correctAnswer)];
  };
  

  const brainProgression = () => {
  const rulesMessage = 'What number is missing in the progression?';
  const roundsCount = 3;
  playGame(roundsCount, rulesMessage, generateProgressionQuestion)
  };
  
  export default brainProgression;
  
