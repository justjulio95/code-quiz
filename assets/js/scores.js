var scoresList = document.getElementById("scores-list")
var clearBtn = document.getElementById("clear")

function addScores() {
    var hs = JSON.parse(localStorage.getItem("highScore"));
    
    for (let i = 0; i < hs.length; i++) {
        var list = document.createElement("li");
        list.textContent = (hs[i].initials + " : " + hs[i].score);
        scoresList.appendChild(list);
    }
}

function clearScores() {
    alert("All scores have been cleared!")
    localStorage.clear()
    window.location.reload()
}

clearBtn.addEventListener("click", clearScores)

addScores();