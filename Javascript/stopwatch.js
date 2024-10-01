var startButton = document.querySelector('[data-action="start"]');
var stopButton = document.querySelector('[data-action="stop"]');
var resetButton = document.querySelector('[data-action="reset"]');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var isRunning = false;
var timerTime = 0;
var interval;
function startTimer() {
    if (isRunning)
        return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}
function stopTimer() {
    if (!isRunning)
        return;
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
    stopTimer();
    timerTime = 0;
    if (minutes && seconds) {
        minutes.innerText = '00';
        seconds.innerText = '00';
    }
    else {
        console.error('Minutes or seconds element not found');
    }
}
function incrementTimer() {
    timerTime++;
    var numOfMinutes = Math.floor(timerTime / 60);
    var numOfSeconds = timerTime % 60;
    if (minutes && seconds) {
        minutes.innerText = pad(numOfMinutes);
        seconds.innerText = pad(numOfSeconds);
    }
    else {
        console.error('Minutes or seconds element not found');
    }
}
function pad(number) {
    return customPadStart(number.toString(), 2, '0');
    // if(number < 10) {
    //     return '0' + number;
    // } else {
    //     return number;
    // }
}
;
function repeatString(str, counter) {
    var result = '';
    for (var i = 0; i < counter; i++) {
        result += str;
    }
    return result;
}
function customPadStart(str, targetLength, padString) {
    if (padString === void 0) { padString = ''; }
    if (str.length >= targetLength) {
        return str;
    }
    var padding = repeatString(padString, targetLength - str.length).slice(0, targetLength - str.length);
    return padding + str;
}
;
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', startTimer);
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener('click', stopTimer);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', resetTimer);
