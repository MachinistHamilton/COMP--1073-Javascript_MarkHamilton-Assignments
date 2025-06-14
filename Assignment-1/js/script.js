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

// Buttons
const storyBuilderButtons = document.querySelectorAll(".selectors > button");

// adds Event Listener to each button
for (let i = 0; i < storyBuilderButtons.length; i++) {
	if (allStorySections[i] === undefined) {
		console.error(`No story section found for button index ${i}`);
		continue;
	}
	storyBuilderButtons[i].addEventListener("click", () => {
		randomlyPick(allStorySections[i]);
	});
}
