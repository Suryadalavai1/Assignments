let seconds = 00;
let tens = 00;
let Tens = document.getElementById("tens");
let Seconds = document.getElementById("seconds");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let interval;

function Timer() {
  tens++;
  if (tens < 9) {
    Tens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    Tens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    Seconds.innerHTML = "0" + seconds;
    tens = 0;
    Tens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    Seconds.innerHTML = seconds;
  }
}

startButton.onclick = function () {
  interval = setInterval(Timer);
};
stopButton.onclick = function () {
  clearInterval(interval);
};
resetButton.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  Seconds.innerHTML = seconds;
  Tens.innerHTML = tens;
};
