
var num = 0
function newNum() {
    num = Math.floor(Math.random() * 100)+1;
    console.log("generating new number")
    document.getElementById("output").innerHTML = "Guess a number between 1 and 100 below";
    document.getElementById("guessCountOut").innerHTML = "Guess Count: 0";
    guessCount = 0
}
function hideSpin() {
    document.getElementById("thinking").style.display = "none";
    console.log("hiding spinner")
}
function guess2() {
    console.log("assessing guess")
    var higherLower = ""
    var guess = document.getElementById("guessInput").value;
    if (guess == num) {
        higherLower = "You win"
    } else if (guess > num) {
        higherLower = "Lower"
    }
    else {
        higherLower = "Higher"
    }
    guessCount += 1
    document.getElementById("thinking").style.display = "none"
    console.log("hiding spinner")
    document.getElementById("guessButton").disabled = false;
    document.getElementById("restartButton").disabled = false;
    console.log("enabling buttons")
    document.getElementById("output").innerHTML = higherLower
    document.getElementById("guessCountOut").innerHTML = "Guess Count: " + guessCount
}
function guess() {
    document.getElementById("guessButton").disabled = true;
    document.getElementById("restartButton").disabled = true;
    console.log("disabling buttons")
    document.getElementById("thinking").style.display = "block";
    console.log("showing spinner")
    setTimeout(guess2, 3000);  
}
