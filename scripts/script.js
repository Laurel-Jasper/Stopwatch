// Define variables to store time values
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define variables to hold "stopwatch display"
let displayMilliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Variable to hold setInterval() function
let interval = null;

// Variable to hold stopwatch status
let stopwatchStatus = "stopped";

// Stopwatch function (logic to determine when to increment next value, ect.)

function stopWatch() {
  milliseconds += 10;

  // Logic to determine when to increment next value

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;

      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }
  }

  // If seconds/minutes/hours are only one digit, add a leading 0 to the value

  if (milliseconds < 10) {
    displayMilliseconds = "0" + milliseconds.toString();
  }
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  // Display updated time values to user
  document.getElementById("stopwatch-display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds + "." + milliseconds;
}

function start() {
  if (stopwatchStatus === "stopped") {
    // Start the stopwatch (by calling the setINterval() function
    interval = window.setInterval(stopWatch, 10);
    stopwatchStatus = "started";
  }
}

function stop() {
  if (stopwatchStatus === "started") {
    window.clearInterval(interval);
    stopwatchStatus = "stopped";
  }
}

// Function to reset the stopwatch

function reset() {
  window.clearInterval(interval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("stopwatch-display").innerHTML = "00:00:00.00";
}
