var scoresList = document.getElementById("scores-list")
var clearBtn = document.getElementById("clear")

// a function to add scores to local storage
function addScores() {
    // create a variable to visually present highscores to screen
    var hs = JSON.parse(localStorage.getItem("highScore"));
    
    // put each stored score on the screen
    for (let i = 0; i < hs.length; i++) {
        var list = document.createElement("li");
        list.textContent = (hs[i].initials + " : " + hs[i].score);
        scoresList.appendChild(list);
    }
}

// clears the local storage and, in turn, the scores screen
function clearScores() {
    alert("All scores have been cleared!")
    localStorage.clear()
    window.location.reload()
}

clearBtn.addEventListener("click", clearScores)

addScores();