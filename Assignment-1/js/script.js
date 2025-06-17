//-- VARIABLES --

// Variable to keep track of the current index of each array
let Part1_index = 0;
let Part2_index = 0;
let Part3_index = 0;
let Part4_index = 0;
let Part5_index = 0;

// DOM elements to grab the story elements of the html document
const storySection1Vars = document.querySelectorAll(
	".purple-container > .grid-item"
);
const storySection2Vars = document.querySelectorAll(
	".blue-container > .grid-item"
);
const storySection3Vars = document.querySelectorAll(
	".green-container > .grid-item"
);
const storySection4Vars = document.querySelectorAll(
	".orange-container > .grid-item"
);
const storySection5Vars = document.querySelectorAll(
	".pink-container > .grid-item"
);

// Array to build the current story
const allStorySections = [
	storySection1Vars,
	storySection2Vars,
	storySection3Vars,
	storySection4Vars,
	storySection5Vars,
];

// Function that grabs all story buttons
const storyBuilderButtons = document.querySelectorAll(".selectors > button");

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

// adds Event Listener to each button
for (let i = 0; i < storyBuilderButtons.length; i++) {
	// check if the current index is less than the length of the array
	// If it is, log the current part and increment the index
	// If your at the end of the array , reset the index to 0
	if (Part1_index < storyPart1.length) {
		console.log("debug-> storyPart1:" + storyPart1[Part1_index]); // log the current part to console
		// Highlight the selected part in the story section
		highlightSelected(storySection1Vars, Part1_index);
		// Increment the index to move to the next part
		Part1_index++;
	} else {
		Part1_index = 0; // Reset index to 0 if at the end
		console.log("debug-> storyPart1 reset:" + storyPart1[Part1_index]); // log the index value to console
	}
}

//----- Controll buttons -----
// Playback button
document.getElementById("button7").addEventListener("click", function () {
	if (
		Part1_index > 0 &&
		Part2_index > 0 &&
		Part3_index > 0 &&
		Part4_index > 0 &&
		Part5_index > 0
	) {
		const story = `${storyPart1[Part1_index - 1]} ${
			storyPart2[Part2_index - 1]
		} ${storyPart3[Part3_index - 1]} ${storyPart4[Part4_index - 1]} ${
			storyPart5[Part5_index - 1]
		}.`;
		console.log("debug-> currentStory: " + story);
	} else {
		console.log(
			"Please complete all parts of the story before generating."
		);
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

	const randomStory = `${storyPart1[Part1_index - 1]} ${
		storyPart2[Part2_index - 1]
	} ${storyPart3[Part3_index - 1]} ${storyPart4[Part4_index - 1]} ${
		storyPart5[Part5_index - 1]
	}.`;
	console.log("debug-> randomStory: " + randomStory);
});
//------ end of controll buttons
