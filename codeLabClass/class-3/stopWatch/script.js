// grab things needed
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 00;
let isRunning = false;
let interval; 

//     setInterval(function() {
//       timerTime++;
  
//       const numOfMinutes = Math.floor(timerTime / 60);
//       const numOfSeconds = timerTime % 60;
  
//       console.log({numOfMinutes, numOfSeconds});
  
//       minutes.innerText = pad(numOfMinutes);
//       seconds.innerText= pad(numOfSeconds);
//       // console.count('Hello!');             
//     },  1000);

// create a function
function startTimer() {
  if(isRunning) return;
  isRunning = true;
  interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
  if (!isRunning) return; 
  
  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  timerTime = 0; 
  minutes.innerText = '00';
  seconds.innerText = '00';
}

function incrementTimer() {
  timerTime++;
  
  console.log("I'm going up");
  
  const numOfMinutes = Math.floor(timerTime / 60);
  const numOfSeconds = timerTime % 60;
  
  // console.log({numOfMinutes, numOfSeconds});
  
  minutes.innerText = pad(numOfMinutes);
  seconds.innerText= pad(numOfSeconds);
  // console.count('Hello!');             
}
// turn area operator
function pad(number) {
  return (number < 10) ? '0' + number : number; 
  // if(number < 10) {
  //   return '0' + number;
  // } else {
  //   return number;
  // }
}


// add event listener
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);