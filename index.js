let stopEl=document.getElementById("stop");
let readyEl=document.getElementById("ready");
let goEl=document.getElementById("go");

let stopbtnEl=document.getElementById("stopbtn");
let readybtnEl=document.getElementById("readybtn");
let gobtnEl=document.getElementById("gobtn");

function stop(){
    stopEl.style.backgroundColor="red"
    stopbtnEl.style.backgroundColor="red"
    readyEl.style.backgroundColor="#5a7184"
    readybtnEl.style.backgroundColor="#1f1d41"
    goEl.style.backgroundColor="#5a7184"
    gobtnEl.style.backgroundColor="#1f1d41"
}
function ready(){
    stopEl.style.backgroundColor="#5a7184"
    stopbtnEl.style.backgroundColor="#1f1d41"
    readyEl.style.backgroundColor="yellow"
    readybtnEl.style.backgroundColor="yellow"
    goEl.style.backgroundColor="#5a7184"
    gobtnEl.style.backgroundColor="#1f1d41"
}
function go(){
    stopEl.style.backgroundColor="#5a7184"
    stopbtnEl.style.backgroundColor="#1f1d41"
    readyEl.style.backgroundColor="#5a7184"
    readybtnEl.style.backgroundColor="#1f1d41"
    goEl.style.backgroundColor="green"
    gobtnEl.style.backgroundColor="green"
}