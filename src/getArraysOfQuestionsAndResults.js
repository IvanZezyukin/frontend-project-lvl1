const getArraysOfQuestionsAndResults = (gameFunction) => {
  const questions = [];
  const results = [];
  const quantityOfQuestions = 3;
  for (let i = 0; i < quantityOfQuestions; i += 1) {
    const [question, result] = gameFunction();
    questions.push(question);
    results.push(result);
  }
  return [questions, results];
};

export default getArraysOfQuestionsAndResults;
