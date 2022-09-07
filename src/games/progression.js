import playGame, { roundsCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (startNumber, stepCount) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const value = startNumber + stepCount * i;
    progression.push(value);
  }
  return progression;
};

const generateRound = () => {
  const step = getRandomNumber(2, 6);
  const start = getRandomNumber(1, 20);
  const progression = generateProgression(start, step);

  const randomIndex = getRandomNumber(0, (progressionLength - 1));

  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runBrainProgressionGame = () => {
  const rounds = [];
  for (let i = 1; rounds.length < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  playGame(rounds, rules);
};

export default runBrainProgressionGame;
