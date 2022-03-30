// Set various variables globally for me to manipulate throughout the functions
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

/*for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].answer)
}*/

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
    console.log(this.textContent)
    debugger;
    if (this.textContent = questions[quizIndex].answer) {
        console.log("CORRECT!!!")
    }
}
    /*setTimeout(function() {
        console.log(this.textContent + " again")
    }, 2000)*/

// compare userPickedAnswer vs answer var(in questions.js)
//  if correct
        // alert correct!
//  else
        // alert wrong and time - 10
// if quizIndex === 9
    // quizEnd() make a function for later
// else
    // quizindex ++
    // renderQuestions(quizIndex)

function renderQuestion(num) {
    questionTitle.textContent = questions[num].question;
    choice1.textContent = questions[num].choices[0];
    choice2.textContent = questions[num].choices[1];
    choice3.textContent = questions[num].choices[2];
}






/*function getChoice(event) {
    var choice = event.target.value
    console.log(choice);
}*/

startBtn.addEventListener("click", startQuiz);
/*for (i = 0; i < questions.length; i++) {
    var answer = prompt(questions[i].question);

    if (answer.toLowerCase() === questions[i].answer.toLowerCase()) {
        alert("CORRECT");
        points += 10;
        console.log(score);
    }
    else {
        alert("WRONG");
    }
}*/