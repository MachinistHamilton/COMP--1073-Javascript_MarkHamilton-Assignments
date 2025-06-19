// grab red slider from html
const redSlider = document.getElementById("red");
// grab green slider from html
const greenSlider = document.getElementById("green");
// grab blue slider from html
const blueSlider = document.getElementById("blue");

// grab the body element from html
const body = document.querySelector("body");


// Update color on slider input
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

// function to update the background color
function updateBackgroundColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    // Set the body's background color using RGB values
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


