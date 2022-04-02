// Set variables globally for me to manipulate throughout the functions
var pageContentEl = document.getElementById("page-content");
var startPage = document.getElementById("main-screen");
var startBtn = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var quizMain = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choiceBtns = document.getElementsByClassName("answer-button")
var choice1 = document.getElementById("a1");
var choice2 = document.getElementById("a2");
var choice3 = document.getElementById("a3");
var quizIndex = 0;
var seconds = 60;
var score = 0
// Variables to assist in stopping the timer when endQuiz is called
var timeoutClear;
var intervalClear;

//function to begin the quiz
function startQuiz() {
    // hides the start/greeting screen
    startPage.setAttribute("class", "hidden");
    quizMain.removeAttribute("class", "hidden");
    //shows the quiz
    quizMain.setAttribute("class", "visible");
    //allows for endQuiz to be called after 60 seconds, whether or not all questions have been answered
    timeoutClear = setTimeout(endQuiz, 60000)

    //Sets the seconds variable to a countdown state
    intervalClear = setInterval(function timer() {
        timerEl.textContent = "Time: " + seconds;
        seconds--;
        if (seconds === 0 || seconds <= 0 || quizIndex === 9) {
            endQuiz();
        }
    }, 1000);

    //put questions to the screen
    renderQuestion(quizIndex);
    // logs the answer picked by the user
    for (let i = 0; i < choiceBtns.length; i++) {
        choiceBtns[i].addEventListener("click", questionClick)
    }
}

// check for correct and incorrect answers and display the result to the screen
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
        correctTextEl.setAttribute("class", "visible");
        pageContentEl.appendChild(correctTextEl);
        //set a timer to remove the text from the screen
        setTimeout(function() {
            pageContentEl.removeChild(correctTextEl);
            }, 1000)
        checkFinished();
    } else {
        //subtract time
        seconds -= 10
        // alert wrong
        incorrectTextEl.setAttribute("class", "visible");
        pageContentEl.appendChild(incorrectTextEl);
        //set a timer to remove the text from the screen
        setTimeout(function() {
            pageContentEl.removeChild(incorrectTextEl);
            }, 1000)
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
            }, 1000)
    }
}

//function to end the quiz and get info from the user
function endQuiz() {
    if (seconds <= 0) {
        seconds = 0;
    }
    clearTimeout(timeoutClear)
    clearInterval(intervalClear)
    score = seconds;
    //hide the questions
    quizMain.removeAttribute("class", "visible")
    quizMain.setAttribute("class", "hidden");
    //hide the timer
    timer.setAttribute("class", "hidden");

    //dynamically create end screen
    var endScreen = document.createElement("div");
    endScreen.setAttribute("class", "visible");
    endScreen.setAttribute("id", "end-screen")
    endScreen.innerHTML = "<h1>Good Job!<h1>";

    //alert player of their final score
    var scoreAlert = document.createElement("p")
    scoreAlert.setAttribute("id", "final-score")
    scoreAlert.innerHTML = "Your high score is " + score +"!<br/> Enter your initials below!"
    scoreAlert.setAttribute("style", "position:relative; bottom:20px")
    endScreen.appendChild(scoreAlert);

    //get players initials
    var initials = document.createElement("input");
    initials.setAttribute("id", "initials");
    //Allow for no more than 3 letters for initials
    initials.setAttribute("maxlength", "3")
    initials.setAttribute("style", "position:inherit; bottom:45px; left:50px");
    endScreen.appendChild(initials);

    //create a submit button
    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("style", "position:relative; right:70px; bottom:5px");
    submitBtn.setAttribute("onclick", "location.href='./scores.html'");
    submitBtn.textContent = "Submit"
    endScreen.appendChild(submitBtn);

    pageContentEl.appendChild(endScreen);
    
    submitBtn.addEventListener("click", submitScore)
}

// lets the user submit and store their scores into local storage
function submitScore() {
    // create variable for initials
    var initials = document.getElementById("initials").value
    // create variable for finalScore
    var finalScore = score
    // create an array of objects for highScores
    var highScore = [{
        initials: initials,
        score: finalScore
    }]

    // pull a value for pastScores
    var pastScores = JSON.parse(localStorage.getItem("highScore"))
    //if pastScores is nonexistent
    if (pastScores === null) {
        //set pastScores to highScore
        pastScores = highScore
    } else {
        //else push value to index 0 in array
        pastScores.push(highScore[0])
    }

    localStorage.setItem("highScore", JSON.stringify(pastScores))
}

//this function puts the questions to the screen as the quizIndex value goes up.
function renderQuestion(num) {
    questionTitle.textContent = questions[num].question;
    choice1.textContent = questions[num].choices[0];
    choice2.textContent = questions[num].choices[1];
    choice3.textContent = questions[num].choices[2];
}

startBtn.addEventListener("click", startQuiz);