const buttonSwitch = document.getElementById("multiple-button");
// const stopButton = document.getElementById("stop-button");

buttonSwitch.addEventListener("click", updateButton);

function updateButton() {
    if (buttonSwitch.textContent === "Start") {
        buttonSwitch.textContent = "Stop";
        buttonSwitch.style.color = "rgb(255, 47, 47)";
        buttonSwitch.style.border = "rgb(255, 47, 47) solid 1px";
        buttonSwitch.style.color = "rgb(255, 47, 47)";
    } else if (buttonSwitch.textContent === "Stop") {
        buttonSwitch.textContent = "Start";
        buttonSwitch.style.color = "rgb(57, 106, 255)";
        buttonSwitch.style.border = "rgb(57, 106, 255) solid 1px";
    }
    // buttonSwitch.style.display = 'none';
    // stopButton.style.display = 'block';
}