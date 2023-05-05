let bgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function applyButton() {
    customButton.style.backgroundColor = bgColor.value;
    customButton.style.color = fontColor.value;
    customButton.style.fontSize = fontSize.value;
    customButton.style.fontWeight = fontWeight.value;
    customButton.style.padding = paddingInput.value;
    customButton.style.borderRadius = borderRadius.value;
}