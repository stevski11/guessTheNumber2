
var num = 0
function newNum() {
    num = Math.floor(Math.random() * 100)+1;
    document.getElementById("output").innerHTML = "Guess a number between 1 and 100 below";
    document.getElementById("guessCountOut").innerHTML = "Guess Count: 0";
    guessCount = 0
}
function guess() {
    var guess = document.getElementById("guessInput").value;
    var higherLower = ""
    if (guess == num) {
        higherLower = "You win"
    } else if (guess > num) {
        higherLower = "Lower"
    }
    else {
        higherLower = "Higher"
    }
    guessCount = guessCount+1
    document.getElementById("output").innerHTML = higherLower
    document.getElementById("guessCountOut").innerHTML = "Guess Count: " + guessCount
}
