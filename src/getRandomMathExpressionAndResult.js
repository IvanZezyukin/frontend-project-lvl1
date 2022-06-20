import _ from 'lodash';

const getRandomMathExpressionAndResult = () => {
  const x = _.random(1, 25);
  const y = _.random(1, 25);
  const indexOfTypeOfMathExpression = _.random(1, 3);
  if (indexOfTypeOfMathExpression === 1) {
    return [x, '+', y, x + y];
  }
  if (indexOfTypeOfMathExpression === 2) {
    return [x, '-', y, x - y];
  }
  if (indexOfTypeOfMathExpression === 3) {
    return [x, '*', y, x * y];
  }
};

export default getRandomMathExpressionAndResult;
