// // BUTTONS
// const startStopSwitch = document.getElementById("start-stop-button");
// const lapResetSwitch = document.getElementById("lap-reset-button");
// // const stopButton = document.getElementById("stop-button");

// // WATCH
// const watchOperations = document.getElementById("watch-display");
// let seconds = 0;

// startStopSwitch.addEventListener("click", updateStartStop);
// // This button switches from start to stop
// function updateStartStop() {
//   if (startStopSwitch.textContent === "Start") {
//     startStopSwitch.textContent = "Stop";
//     startStopSwitch.style.color = "rgb(239, 239, 239)";
//     startStopSwitch.style.border = "rgb(255, 47, 47) solid 3px";
//     startStopSwitch.style.backgroundColor = "rgb(255, 47, 47)";
//   } else if (startStopSwitch.textContent === "Stop") {
//     startStopSwitch.textContent = "Start";
//     startStopSwitch.style.color = "rgb(239, 239, 239)";
//     startStopSwitch.style.border = "rgb(57, 106, 255) solid 3px";
//     startStopSwitch.style.backgroundColor = "rgb(57, 106, 255)";
//   }
//   // buttonSwitch.style.display = 'none';
//   // stopButton.style.display = 'block';
// }

// // function changes lap to reset

// startStopSwitch.addEventListener("click", updateLapResetButton);

// function updateLapResetButton() {
//   if (
//     lapResetSwitch.textContent === "Lap" &&
//     startStopSwitch.textContent === "Start"
//   ) {
//     lapResetSwitch.textContent = "Reset";
//   } else if (lapResetSwitch.textContent === "Reset" && startStopSwitch.textContent === "Stop") {
//     lapResetSwitch.textContent = "Lap";
//   } 
// }

// // Change color to lap and reset to active
// // startStopSwitch.addEventListener("click", updateLapAndResetToActive);
// // function updateLapAndResetToActive () {
// //   if (startStopSwitch.textContent === "Stop") {
// //     updateLapAndResetToActive.style.color = "rgb(239, 239, 239)";
// //     updateLapAndResetToActive.style.border = "rgb(255, 47, 47) solid 3px";
// //     updateLapAndResetToActive.style.backgroundColor = "rgb(255, 47, 47)";
// //   }
// // }

// // Watch Functions
// startStopSwitch.addEventListener("click", watch);
// function watch() { 
//   if (startStopSwitch.textContent === "Stop") {
    
//   }
// }

