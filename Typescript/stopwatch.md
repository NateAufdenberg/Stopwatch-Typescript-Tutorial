let startButton: HTMLElement | null = document.querySelector('[data-action="start"]');
let stopButton: Element | null = document.querySelector('[data-action="stop"]');
let resetButton: Element | null = document.querySelector('[data-action="reset"]');
let minutes: HTMLElement | null= document.querySelector('.minutes');
let seconds: HTMLElement | null = document.querySelector('.seconds');
let isRunning: boolean = false;
let timerTime: number = 0;
let interval:number;

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    stopTimer()

    timerTime = 0;
    if (minutes && seconds) {
        minutes.innerText = '00';
        seconds.innerText = '00';
    } else {
        console.error('Minutes or seconds element not found');
    }
}

function incrementTimer() {
    timerTime++
    let numOfMinutes = Math.floor(timerTime / 60);
    let numOfSeconds = timerTime % 60

    if (minutes && seconds) {
        minutes.innerText = pad(numOfMinutes);
        seconds.innerText = pad(numOfSeconds);
    } else {
        console.error('Minutes or seconds element not found');
    }
}

function pad(number: number): string {
    return number.toString().padStart(2, '0');
    // if(number < 10) {
    //     return '0' + number;
    // } else {
    //     return number;
    // }
};

startButton?.addEventListener('click', startTimer);
stopButton?.addEventListener('click', stopTimer);
resetButton?.addEventListener('click', resetTimer);