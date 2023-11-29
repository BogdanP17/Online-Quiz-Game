

const questions = [

    {
        question : "Where is playing Leo Messi?",
        answers :[
           
            { text: "Barcelona", correct: true},
            { text: "Real Madrid", correct: false},
            { text: "East Ham", correct: false},
            { text: "Chealsea", correct: false},    
        ]
    },
    {
        question: "Connor McGreggor is ",
        answers: [
            {text: "F1 Driver", correct: false},
            {text: "MAA Fighter", correct: true},
            {text: "Golf Player", correct: false},
            {text: "Dancer", correct: false},
        ]
    }

];
 const questionElement= document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next");

 let currentQuestionIndex = 0;
 let score = 0;


 function startGame(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextQuestion();

 }

 function nextQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

    });

 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

startGame();