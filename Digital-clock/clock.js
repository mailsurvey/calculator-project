import getHours from './clock-hour.js';
import getMinutes from './clock-minute.js';
import getSeconds from './clock-second.js';
import getAmOrPm from './amorpm.js';


const currentTime = document.querySelector(".gettime");
const currentHour = document.getElementById('hour');
const currentMinutes = document.getElementById('minutes');
const currentSeconds = document.getElementById('seconds');
const currentAmOrPm = document.getElementById('amorpm');



const getCurrentTime = ()=>{
const time = new Date();
return time;
}




currentTime.innerHTML = `Current Time: ${getCurrentTime()}`;

const currentTImeRunning = ()=>{
    //this is to get current hour
currentHour.innerHTML = getHours;

//this is to get current minutes
currentMinutes.innerHTML = getMinutes;

//this is to get current seconds
currentSeconds.innerHTML = getSeconds;

//this is to get am or pm
currentAmOrPm.innerHTML = getAmOrPm;
    
}


currentTImeRunning();

setInterval(currentTImeRunning, 1000)













