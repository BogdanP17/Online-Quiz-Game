

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
    },
    {
        question: "Who win the 2019 world cuo?",
        answers: [
            { text: "France", correct: false},
            { text: "Romania", correct: false},
            { text: "Argentina", correct: true},
            { text: "Germany", correct: false},
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct")
            score++;
        }else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = "true";
        });
        nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again.";
    nextButton.style.display = "block";
 }



 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        nextQuestion();
    }else {
        showScore();
    }
 }

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startGame();
    }
 })

startGame();