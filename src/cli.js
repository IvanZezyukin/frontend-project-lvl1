import readlineSync from 'readline-sync';
export const getAnswerFromUser = (question) => {
    return readlineSync.question(question);
};