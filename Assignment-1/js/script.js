// VARIABLES //

// Arrays of story parts
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

const allStorySections = [
	storySection1Vars,
	storySection2Vars,
	storySection3Vars,
	storySection4Vars,
	storySection5Vars,
];

// Array to hold the selected parts of the story
let selectedParts = ["", "", "", "", ""];

// Story Builder Buttons
const storyBuilderButtons = document.querySelectorAll(".selectors > button");

// Surprise Button
const surpriseButton = document.querySelector("#button6");

// Playback Button
const playbackButton = document.querySelector("#button7");

//END OF VARIABLES //

// FUNCTIONS //

// Function randomly selects a story part from each section
function randomlyPick(storySection) {
	let storyPart =
		storySection[Math.floor(Math.random() * storySection.length)]
			.textContent;

	console.log(storyPart);

	return storyPart;
}

// END OF FUNCTIONS //

// EVENT LISTENERS //

// adds Event Listener to each button
for (let i = 0; i < storyBuilderButtons.length; i++) {
	// Checks if the storysection exists to assign the event listener
	// If it doesn't exist, logs an error message
	if (allStorySections[i] === undefined) {
		console.error(`No story section found for button index ${i}`);
		continue;
	}

	// Adds an event listener to each button
	storyBuilderButtons[i].addEventListener("click", () => {
		// Gets a random part from the corresponding story section
		const part = randomlyPick(allStorySections[i]);

		// Updates the selectedParts array with the new part
		selectedParts[i] = part;
	});
}

// Adds an event listener to the playback button
playbackButton.addEventListener("click", () => {
	// Clears the console
	console.clear();

	// Logs the selected parts of the story
	console.log(selectedParts.join(" "));

	// Resets the selected parts array
	selectedParts = ["", "", "", "", ""];
});

// END OF EVENT LISTENERS //
