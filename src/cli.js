import readlineSync from 'readline-sync';

const getAnswerFromUser = (question) => readlineSync.question(question);
export default getAnswerFromUser;
