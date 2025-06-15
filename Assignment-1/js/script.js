//-- VARIABLES --
// Arrays of story parts
const storyPart1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const storyPart2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const storyPart3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const storyPart4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const storyPart5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoe"];

// Variable to keep track of the current index of each array
let Part1_index = 0;
let Part2_index = 0;
let Part3_index = 0;
let Part4_index = 0;
let Part5_index = 0;

// DOM elements to grab the story elements of the html document
const storySection1Vars = document.querySelectorAll(".purple-container > .grid-item");
const storySection2Vars = document.querySelectorAll(".blue-container > .grid-item");
const storySection3Vars = document.querySelectorAll(".green-container > .grid-item");
const storySection4Vars = document.querySelectorAll(".orange-container > .grid-item");
const storySection5Vars = document.querySelectorAll(".pink-container > .grid-item");

// Array to build the current story
const allStorySections = [
    storySection1Vars,
    storySection2Vars,
    storySection3Vars,
    storySection4Vars,
    storySection5Vars
];

// Helper to visually highlight selected item
function highlightSelected(section, index) {
    if (!section || section.length === 0) return;
    section.forEach((element, idx) => {
        if (idx === index) {
            element.classList.add("selected");
        } else {
            element.classList.remove("selected");
        }
    });
}

// ----- STORY PART BUTTONS -----
// Event Listener for purple button and logic to cycle through storyPart1 array.
document.getElementById("button1").addEventListener("click", function() {
    // check if the current index is less than the length of the array
    // If it is, log the current part and increment the index
    // If your at the end of the array , reset the index to 0
    if (Part1_index < storyPart1.length) {
        console.log("debug-> storyPart1:" + storyPart1[Part1_index]);  // log the current part to console
        // Highlight the selected part in the story section
        highlightSelected(storySection1Vars, Part1_index);
        // Increment the index to move to the next part
        Part1_index++;
    } else {
        Part1_index = 0; // Reset index to 0 if at the end
        console.log("debug-> storyPart1 reset:" + storyPart1[Part1_index]); // log the index value to console
    }
});

//----- Repeat for other buttons with their respective arrays
// Event Listener blue button and logic to cycle through storyPart2 array.
document.getElementById("button2").addEventListener("click", function() {
    if (Part2_index < storyPart2.length) {
        console.log("debug-> storyPart2:" + storyPart2[Part2_index]);
        highlightSelected(storySection2Vars, Part2_index);
        Part2_index++;
    } else {
        Part2_index = 0;
        console.log("debug-> storyPart2 reset:" + storyPart2[Part2_index]);
    }
});

//----- Repeat
// Event listener for green button and logic to cycle through storyPart3 array.
document.getElementById("button3").addEventListener("click", function() {
    if (Part3_index < storyPart3.length) {
        console.log("debug-> storyPart3:" + storyPart3[Part3_index]);
        highlightSelected(storySection3Vars, Part3_index);
        Part3_index++;
    } else {
        Part3_index = 0;
        console.log("debug-> storyPart3 reset:" + storyPart3[Part3_index]);
    }
});

//----- Repeat
// Event listener for orange button and logic to cycle through storyPart4 array.
document.getElementById("button4").addEventListener("click", function() {
    if (Part4_index < storyPart4.length) {
        console.log("debug-> storyPart4:" + storyPart4[Part4_index]);
        highlightSelected(storySection4Vars, Part4_index);
        Part4_index++;
    } else {
        Part4_index = 0;
        console.log("debug-> storyPart4 reset:" + storyPart4[Part4_index]);
    }
});

//----- Repeat
// Event Listener for red button and logic to cycle through storyPart5 array.
document.getElementById("button5").addEventListener("click", function() {
    if (Part5_index < storyPart5.length) {
        console.log("debug-> storyPart5:" + storyPart5[Part5_index]);
        highlightSelected(storySection5Vars, Part5_index);
        Part5_index++;
    } else {
        Part5_index = 0;
        console.log("debug-> storyPart5 reset:" + storyPart5[Part5_index]);
    }
});
//----- end of story part buttons


//----- Controll buttons -----
// Playback button
document.getElementById("button7").addEventListener("click", function () {
    if (Part1_index > 0 && Part2_index > 0 && Part3_index > 0 && Part4_index > 0 && Part5_index > 0) {
        const story = `${storyPart1[Part1_index - 1]} ${storyPart2[Part2_index - 1]} ${storyPart3[Part3_index - 1]} ${storyPart4[Part4_index - 1]} ${storyPart5[Part5_index - 1]}.`;
        console.log("debug-> currentStory: " + story);
    } else {
        console.log("Please complete all parts of the story before generating.");
    }
});

// Surprise button
document.getElementById("button6").addEventListener("click", function () {
    Part1_index = Math.floor(Math.random() * storyPart1.length) + 1;
    Part2_index = Math.floor(Math.random() * storyPart2.length) + 1;
    Part3_index = Math.floor(Math.random() * storyPart3.length) + 1;
    Part4_index = Math.floor(Math.random() * storyPart4.length) + 1;
    Part5_index = Math.floor(Math.random() * storyPart5.length) + 1;

    highlightSelected(storySection1Vars, Part1_index - 1);
    highlightSelected(storySection2Vars, Part2_index - 1);
    highlightSelected(storySection3Vars, Part3_index - 1);
    highlightSelected(storySection4Vars, Part4_index - 1);
    highlightSelected(storySection5Vars, Part5_index - 1);

    const randomStory = `${storyPart1[Part1_index - 1]} ${storyPart2[Part2_index - 1]} ${storyPart3[Part3_index - 1]} ${storyPart4[Part4_index - 1]} ${storyPart5[Part5_index - 1]}.`;
    console.log("debug-> randomStory: " + randomStory);
});
//------ end of controll buttons
