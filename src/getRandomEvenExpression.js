import _ from 'lodash';

const getRandomEvenExpression = () => {
  const x = _.random(1, 25);
  return [x, x % 2 === 0 ? 'yes' : 'no'];
};

export default getRandomEvenExpression;
