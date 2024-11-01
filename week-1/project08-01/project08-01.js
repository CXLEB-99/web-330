"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Caleb Goforth
      Date: 10/27/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Constructor function for the timer object
function Timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// runPause method for the Timer object
Timer.prototype.runPause = function(minBox, secBox) {
  // Check if the timer is currently running
  if (this.timeID) {
      // Pause the timer
      window.clearInterval(this.timeID);
      this.timeID = null;
  } else {
      // Start the timer and store the interval ID in this.timeID
      this.timeID = window.setInterval(() => {
          countdown(this, minBox, secBox);
      }, 1000);
  }
};

// countdown function to update the timer every second
function countdown(timer, minBox, secBox) {
  if (timer.seconds > 0) {
      // Decrease seconds if greater than 0
      timer.seconds -= 1;
  } else if (timer.minutes > 0) {
      // Decrease minutes by 1 and reset seconds to 59 if minutes > 0
      timer.minutes -= 1;
      timer.seconds = 59;
  } else {
      // Timer has reached 0:0; stop the timer
      window.clearInterval(timer.timeID);
      timer.timeID = null;
  }

  // Update the displayed values for minutes and seconds
  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}

/*--------------- Interface Code -----------------*/

// Access the minBox, secBox, and runPauseTimer elements in JavaScript
const minBox = document.getElementById("minutesBox");
const secBox = document.getElementById("secondsBox");
const runPauseTimer = document.getElementById("runPauseButton");

// Declare an instance of the Timer object
const myTimer = new Timer(parseInt(minBox.value), parseInt(secBox.value));

// onchange event handler for minBox
minBox.onchange = function() {
    myTimer.minutes = parseInt(minBox.value);
};

// onchange event handler for secBox
secBox.onchange = function() {
    myTimer.seconds = parseInt(secBox.value);
};

// onclick event handler for runPauseTimer button
runPauseTimer.onclick = function() {
    myTimer.runPause(minBox, secBox);
};
