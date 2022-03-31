// Set variables globally for me to manipulate throughout the functions
var pageContentEl = document.getElementById("page-content");
var startPage = document.getElementById("start-screen");
var startBtn = document.getElementById("start-button");
var quizMain = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choiceBtns = document.getElementsByClassName("answer-button")
var choice1 = document.getElementById("a1");
var choice2 = document.getElementById("a2");
var choice3 = document.getElementById("a3");
var quizIndex = 0;
var seconds = 0;

//function to begin the quiz
function startQuiz() {
    // hides the start/greeting screen
    startPage.setAttribute("class", "hidden");
    quizMain.removeAttribute("class", "hidden");
    //shows the quiz
    quizMain.setAttribute("class", "start-screen");

    //put questions to the screen
    renderQuestion(quizIndex);
    // logs the answer picked by the user
    for (let i = 0; i < choiceBtns.length; i++) {
        choiceBtns[i].addEventListener("click", questionClick)
    }
}

function questionClick() {
    // dynamically create Correct alert to screen
    var correctTextEl = document.createElement("h2")
    correctTextEl.textContent = "Correct!"

    // dynamically create Incorrect alert to screen
    var incorrectTextEl = document.createElement("h2")
    incorrectTextEl.textContent = "Wrong!"

    //compare clicked answer vs answer var
    //if correct
    if(this.textContent === questions[quizIndex].answer) {
        // alert correct
        correctTextEl.setAttribute("class", "start-screen");
        pageContentEl.appendChild(correctTextEl);
        //set a timer to remove the text from the screen
        setTimeout(function() {
            pageContentEl.removeChild(correctTextEl);
            }, 1500)
        checkFinished();
    } else {
        // alert wrong
        incorrectTextEl.setAttribute("class", "start-screen");
        pageContentEl.appendChild(incorrectTextEl);
        //set a timer to remove the text from the screen
        setTimeout(function() {
            pageContentEl.removeChild(incorrectTextEl);
            }, 1500)
        checkFinished();
    }
}

//function to check if the is over (using quizIndex FOR NOW)
function checkFinished () {
    if (quizIndex === 9) {
        endQuiz();
    } else {
        //increment quizIndex
        quizIndex++;
        setTimeout(function() {
            renderQuestion(quizIndex);
            }, 1500)
        //renderQuestion(quizIndex);
    }
}

function endQuiz() {
    //hide the questions
    quizMain.removeAttribute("class", "start-screen")
    quizMain.setAttribute("class", "hidden");

    //dynamically create end screen
    var endScreen = document.createElement("div");
    endScreen.setAttribute("class", "start-screen");
    endScreen.innerHTML = "<h1>It's Over!<h1>";

    pageContentEl.appendChild(endScreen);
}

function renderQuestion(num) {
    questionTitle.textContent = questions[num].question;
    choice1.textContent = questions[num].choices[0];
    choice2.textContent = questions[num].choices[1];
    choice3.textContent = questions[num].choices[2];
}

startBtn.addEventListener("click", startQuiz);