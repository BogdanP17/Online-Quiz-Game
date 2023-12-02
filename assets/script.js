
// Questions array 
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
        question: "Who win the 2020 world cup?",
        answers: [
            { text: "France", correct: false},
            { text: "Romania", correct: false},
            { text: "Argentina", correct: true},
            { text: "Germany", correct: false},
        ]
    },
    {
        question: "How many ballon d'or Messi have?",
        answers:[
            { text: "1", correct: false},
            { text: "5", correct: false},
            { text: "3", correct: false},
            { text: "8", correct: true},
        ]
    },
    {
        question: "Which team Ronaldo play?",
        answers: [
            { text:"Read Madrid", correct:false},
            { text:"Al-Nassr FC", correct: true},
            { text:"Mancester City", correct: false},
            { text:"Licerpool", correct: false},
        ]
    },
    {
        question: "How many goals has Mbappe scored?",
        answers: [
            { text:"155", correct: false},
            { text:"302", correct: true},
            { text:"200", correct:false},
            { text:"100", correct: false},
        ]
    },
    {
        question: "Who is the captain of PSG?",
        answers: [
            { text:"Marquinhos", correct: true},
            { text:"Kylian Mbappe", correct:false},
            { text:"Danilo Pereira", correct:false},
            { text:"Julian Draxler", correct:false},
        ]
    },
    {
        question: "Where is originally Neymar from?",
        answers: [
            { text:"Morocco", correct:false},
            { text:"England", correct:false},
            { text:"Brazil", correct:true},
            { text:"France", correct:false},
        ]
    },
    {
        question: "Which stadium is the biggest in the world?",
        answers: [
            { text:"Wembley Stadium", correct:false},
            { text:"Neyland Stadium", correct: false},
            { text:"Beaver Stadium", correct:false},
            { text:"Rungrado 1st of May Stadium", correct:true},
        ]
    },
    {
        question: "How many yellow card a player can take?",
        answers: [
            { text:"5", correct: false},
            { text:"3", correct:false},
            { text:"1", correct:false},
            { text:"2", correct:true},
        ]
    }

];
 const questionElement= document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next");

 let currentQuestionIndex = 0;
 let score = 0;

// Game function
 function startGame(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextQuestion();

 }

 // Next questions function
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
// Selected answers by user function 
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


 // Score function
 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again.";
    nextButton.style.display = "block";
 }

 // Next button for questions
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