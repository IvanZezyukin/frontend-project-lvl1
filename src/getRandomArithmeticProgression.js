import _ from 'lodash';

const getRandomArithmeticProgression = () => {
  let startItem = _.random(1, 14);
  const length = _.random(5, 10);
  const indexOfHiddenElement = _.random(1, length);
  const progressionStep = _.random(1, 5);
  const array = [startItem];
  for (let i = 0; i < length; i += 1) {
    array.push(startItem += progressionStep);
  }
  const result = array.splice(indexOfHiddenElement, 1, '..');
  return [`${array.join(' ')}`, `${result.join()}`];
};

export default getRandomArithmeticProgression;
