var hrs = window.prompt("Enter Hours: ")
var min = window.prompt("Enter Minutes: ")
var sec = window.prompt("Enter Seconds: ");

var totalSec = Number(sec) + Number(min * 60) + Number (hrs * 60 * 60);




const timer = document.getElementById('timer');
const HRS = document.getElementById('HRS');
const MINS = document.getElementById('MINS');
const SECS = document.getElementById('SECS');
setInterval(updateTimer, 1000);
function updateTimer(){
    tHrs = Math.floor(totalSec / 3600);
    tMin = Math.floor((totalSec - (Number(tHrs)*3600))/60);
    tSec = Math.floor(totalSec - (Number(tHrs)*3600) - (Number(tMin)*60));
    if (totalSec > 0){
    totalSec --;
    }
    if (tHrs < 10){
        tHrs = "0" + tHrs
    }
    if (tMin < 10){
        tMin = "0" + tMin
    }
    if (tSec < 10){
        tSec = "0" + tSec
    }
   
    HRS.innerHTML = tHrs
    MINS.innerHTML = tMin
    SECS.innerHTML = tSec
}

