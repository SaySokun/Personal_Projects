let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let mins = 0;
let secs = 0;
let clockdisplay = document.querySelector(".clock")
let Mclockdisplay = document.querySelector(".Mclock")
let timeStart = () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
};
let timePause = () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
};

let timeReset = () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    mins = 0;
    secs = 0;
    clockdisplay.textContent = "00:00";
    Mclockdisplay.textContent = "00:00";
};
function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    secs = pad(secs);
    mins = pad(mins);
    clockdisplay.textContent = `${mins}:${secs}`;
    Mclockdisplay.textContent = `${mins}:${secs}`;
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}