var startWatch;
var stoptWatch;
var resetWatch;
var timerHours = document.getElementById('timer-hours');
var timerMinutes = document.getElementById('timer-minutes');
var timerSeconds = document.getElementById('timer-seconds');

const startButton = document.getElementById('start');
stopButton = document.getElementById('stop');
resetButton = document.getElementById('reset');
timerDisplay = document.getElementById('time-display');


let timeout = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

let hoursDisplay = '';
let minutesDisplay = '';
let secondsDisplay = '';
var timer = new Date();
var isTimerRunning;

//handle start button
function startTimer() {
    if(isTimerRunning){
        return;
    }else{
        timeout =  setInterval(displayTimer, 1000);
        isTimerRunning = true;
    }
}

//display timer
function displayTimer() { 
    seconds++
    if(seconds == 60){
        seconds %= 60;
        minutes++;

        if(minutes == 60){
            minutes %= 60;
            hours ++;
        }
    }

    if(seconds < 10){
      //  secondsDisplay = seconds;
        document.getElementById('time-display').innerHTML = '0'+hours + ':' + '0'+minutes + ':' + '0'+seconds;
    }else if (minutes < 10){
     //   minutesDisplay = minutes;
        document.getElementById('time-display').innerHTML = '0'+hours + ':' + '0'+minutes + ':' +seconds;
    }else if (hours < 10) {
        document.getElementById('time-display').innerHTML = '0'+hours + ':' + minutes + ':' +seconds;
    }else{
        document.getElementById('time-display').innerHTML = hours + ':' + minutes + ':' + seconds;
    }
    
}

//handle stop button
function stopTimer() {
    // console.log('timer stopped');
 clearTimeout(timeout, 1000);
 isTimerRunning = false; 
}

//handle reset button
function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('time-display').innerHTML = '0'+hours + ':' + '0'+minutes + ':' + '0'+seconds;

}
