function guess() {
    document.getElementById("output").innerHTML = "It worked"
}
var num = 0;
function newNum() {
    num = Math.floor(Math.random() * 100)+1;
    document.getElementById("output").innerHTML = num
}