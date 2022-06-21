import _ from 'lodash';

const getRandomGCDexpession = () => {
  const x = _.random(1, 100);
  const y = _.random(1, 100);
  const greatestCommonDivisor = (x, y) => {
    if (y > x) return greatestCommonDivisor(y, x);
    if (!y) return x;
    return greatestCommonDivisor(y, x % y);
  };
  return [x, y, greatestCommonDivisor(x, y)];
};

export default getRandomGCDexpession;
