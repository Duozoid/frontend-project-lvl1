import playGame, { roundsCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (startNumber, roundsCount, progressionLength) => {
    const progression = [];
    progression.push(startNumber);
    while (progression.length < progressionLength) {
      progression.push(progression[progression.length - 1] + roundsCount);
    }
    return progression;
  };
  
  const generateProgressionQuestion = () => {
    const progression = generateProgression(
      getRandomNumber(0, 30),
      getRandomNumber(1, 15),
      getRandomNumber(5, 11),
    );
    const answer = String(progression[getRandomNumber(0, progression.length - 1)]);
    progression[progression.indexOf(answer)] = '..';
    const question = progression.join(' ');
    return [question, answer];
  };
  

  const brainProgression = () => {
    const rounds = [] 
    for (let i = 0; i < roundsCount; i++) { 
      rounds.push(generateProgressionQuestion()) 
    } 
    playGame(rounds, rules);
    }  
  export default brainProgression;
  
