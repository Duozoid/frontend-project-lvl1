import playGame, { roundsCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What number is missing in the progression?';

const generateProgression = () => {
  const progression = [];
  const startNumber = getRandomNumber(1, 20);
  const stepCount = getRandomNumber(2, 6);
  const progressionLength = getRandomNumber(5, 11);
  for (let i = startNumber; progression.length < progressionLength; i += stepCount) {
    progression.push(i);
  }
  const randomIndex = getRandomNumber(0, progression.length);

  const symbol = '..';
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = symbol;
  const question = `${progression.join(' ')}`;
  const answer = String(hiddenElement);
  return [question, answer];
};

const brainProgression = () => {
  const rounds = [];
  for (let i = 1; rounds.length < roundsCount; i += 1) {
    rounds.push(generateProgression());
  }
  playGame(rounds, rules);
};

export default brainProgression;
