import _ from 'lodash';

const getRandomMathExpressionAndResult = () => {
  const x = _.random(1, 25);
  const y = _.random(1, 25);
  const indexOfTypeOfMathExpression = _.random(1, 3);
  let result = [];
  if (indexOfTypeOfMathExpression === 1) {
    result = [`${x} + ${y}`, `${x + y}`];
  }
  if (indexOfTypeOfMathExpression === 2) {
    result = [`${x} - ${y}`, `${x - y}`];
  }
  if (indexOfTypeOfMathExpression === 3) {
    result = [`${x} * ${y}`, `${x * y}`];
  }
  return result;
};

export default getRandomMathExpressionAndResult;
