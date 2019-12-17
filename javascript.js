
var num = 0
function newNum() {
    num = Math.floor(Math.random() * 100)+1;
    console.log("generating new number")
    $('#output').text("Guess a number between 1 and 100 below");
    $('#guessCountOut').text("Guess Count: 0");
    guessCount = 0
}
function hideSpin() {
    $('#thinking').hide()
    console.log("hiding spinner")
}
function guess2() {
    console.log("assessing guess")
    var higherLower = ""
    var guess = $('#guessInput').val();
    if (guess == num) {
        higherLower = "You win"
    } else if (guess > num) {
        higherLower = "Lower"
    }
    else {
        higherLower = "Higher"
    }
    guessCount += 1
    $('#thinking').hide()
    console.log("hiding spinner")
    $('#guessButton').prop("disabled", false);
    $('#restartButton').prop("disabled", false);
    console.log("enabling buttons")
    $('#output').text(higherLower)
    $('#guessCountOut').text("Guess Count: " + guessCount)
}
function guess() {
    $('#guessButton').prop("disabled", true);
    $('#restartButton').prop("disabled", true);
    console.log("disabling buttons")
    $('#thinking').show();
    console.log("showing spinner")
    setTimeout(guess2, 3000);  
}
