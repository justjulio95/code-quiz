var startPage = document.getElementById("start-screen");
var startBtn = document.getElementById("start-button");
var quizMain = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var score = 0;

function startQuiz() {
    startPage.setAttribute("class", "hidden");
    quizMain.removeAttribute("class", "hidden");
    quizMain.setAttribute("class", "start-screen");
}

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