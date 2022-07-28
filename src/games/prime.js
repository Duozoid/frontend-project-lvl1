import playGame, { roundCount } from '../game-engine.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  
const isPrime = (number) =>{
    if (number > 1) {
        let k = Math.sqrt(number); 
    for(let i = 2; i <= k; i++)
      if(number % i === 0)
          return false;
    return true;
      } return false;
      
    };
  const generateProgressionQuestion = () => {
    const question = getRandomNumber(2, 30);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };
  

  const brainPrime = () => {
  playGame(roundCount, rules, generateProgressionQuestion)
  };
  
  export default brainPrime;
  
;
  
