let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

// Game function
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextQuestion();

}

// Next questions function
function nextQuestion() {
    resetState();
    let currentQuestion = QUESTIONS[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// Selected answers by user function 
function selectAnswer(event) {
    const SELECTEDBTN = event.target;
    const ISCORRECT = SELECTEDBTN.dataset.correct === "true";
    if (ISCORRECT) {
        SELECTEDBTN.classList.add("correct")
        score++;
    } else {
        SELECTEDBTN.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}


// Score function
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${QUESTIONS.length} !`;
    nextButton.innerHTML = "Play Again.";
    nextButton.style.display = "block";
}

// Next button for questions
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS.length) {
        nextQuestion();
    } else {
        showScore();
    }
}



function initializeGame() {
    nextButton.addEventListener("click", onNextButtonClick);
}


function onNextButtonClick() {
    if (currentQuestionIndex < QUESTIONS.length) {
        handleNextButton();
    } else {
        startGame();
    }
}



document.addEventListener("DOMContentLoaded", (event) => {
    initializeGame();
    startGame();
});

