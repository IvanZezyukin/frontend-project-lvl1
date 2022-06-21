import _ from 'lodash';

const getRandomMathExpressionAndResult = () => {
  const x = _.random(1, 25);
  const y = _.random(1, 25);
  const typeOfMathExpression = ['+', '-', '*'];
  const indexOfTypeOfMathExpression = _.random(0, 2);
  const question = `${x} ${typeOfMathExpression[indexOfTypeOfMathExpression]} ${y}`;
  // eslint-disable-next-line no-eval
  const answer = `${eval(question)}`;
  return [question, answer];
};

export default getRandomMathExpressionAndResult;
