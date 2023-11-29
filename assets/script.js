let question = document.getElementsById("question");
let choices = Array.from(documnet.getElementsByClassName("text"));

let questions = [

    {
        question : "Where is playing Leo Messi?",
        option1: "Barcelona",
        option2: "Real Madrid",
        option3: "East Ham",
        option4: "Chealse",
        correctAnswer: 1
    },
    {
        question: "Connor MG is ",
        option1: "MMA Fighter",
        option2: "F1 Driver",
        option3: "Golf Player",
        option4: "Dancer",
        correctAnswer: 1
    }

]

const maxQuestions = 10;
let currentQuestion = {};
let correctAnswers = 0;
let userSelection = null;
let availableQuestion = [];
let score = 0;
let questionCounter = 0;


// Game Function
function gameArea(){
    
    availableQuestion = [...questions];
}
function displayNextQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;


}
// Check the answer
function checkUserAnswer(){
  if(userSelection === answer){
    score++
  }
}

displayNextQuestion();