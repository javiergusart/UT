/* Initializing Quiz Parameters: At the beginning of the script, you are tasked with initializing
several variables that define the quiz's current state. These variables include currentQuestion,
score, numOfQuestions, numOfChoices, and questionCountElement. Your task is to set
currentQuestion and score to their initial values, calculate numOfQuestions based on the length
of the questions array, set numOfChoices to the number of answer choices per question, and
obtain a reference to the HTML element with the id "question-count" and store it in
questionCountElement. */

let currentQuestion = 0;
let score = 0;
const numOfQuestions = questions.length;
const numOfChoices = 3;
const questionCountElement = document.getElementById("question-count");
