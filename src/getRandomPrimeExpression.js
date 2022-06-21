import _ from 'lodash';

const isPrime = (number) => {
  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const getRandomPrimeExpression = () => {
  const number = _.random(2, 100);
  return [number, isPrime(number)];
};

export default getRandomPrimeExpression;
