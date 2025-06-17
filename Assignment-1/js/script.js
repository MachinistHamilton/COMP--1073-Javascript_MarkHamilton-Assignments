//-- VARIABLES --

// Object to keep track of the current index for each part of the story
const partIndexes = {
	Part1_index: 0,
	Part2_index: 0,
	Part3_index: 0,
	Part4_index: 0,
	Part5_index: 0,
};

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

// Object to connect the sections with specific index variables
const storyPartsConfig = [
	{ section: storySection1Vars, indexName: "Part1_index" },
	{ section: storySection2Vars, indexName: "Part2_index" },
	{ section: storySection3Vars, indexName: "Part3_index" },
	{ section: storySection4Vars, indexName: "Part4_index" },
	{ section: storySection5Vars, indexName: "Part5_index" },
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

// adds Event Listener to each button
for (let i = 0; i < storyBuilderButtons.length; i++) {
	// Grabs the specific story part object based on the current index
	const storyPart = storyPartsConfig[i];

	storyBuilderButtons[i].addEventListener("click", function () {
		// Grabs the index name variable from the storyPart object
		const indexKey = storyPart.indexName;

		// Grabs the current index from the partIndexes object using the indexKey
		let currentIndex = partIndexes[indexKey];

		// Checks if an element in the current story part is selected
		const isSelected = Array.from(storyPart.section).some((el) =>
			el.classList.contains("selected")
		);

		// Adds 1 to the current index, and wraps around if it exceeds the length of the section
		// This allows the user to cycle through the story parts
		// Only updates the index if an item is selected
		if (isSelected) {
			partIndexes[indexKey] =
				(currentIndex + 1) % storyPart.section.length;

			// Updates the currentIndex variable with the new index from partIndexes
			currentIndex = partIndexes[indexKey];
		}

		// Highlights the selected item in the current story part
		highlightSelected(storyPart.section, currentIndex);

		// Logs the current story part to the console
		console.log(
			`debug-> ${indexKey}: ` +
				storyPart.section[currentIndex].textContent
		);
	});
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
		const story = `${storySection1Vars[Part1_index - 1].textContent} ${
			storySection2Vars[Part2_index - 1].textContent
		} ${storySection3Vars[Part3_index - 1].textContent} ${
			storySection4Vars[Part4_index - 1].textContent
		} ${storySection4Vars[Part5_index - 1].textContent}.`;
		console.log("debug-> currentStory: " + story);
	} else {
		console.log(
			"Please complete all parts of the story before generating."
		);
	}
});

// Surprise button
document.getElementById("button6").addEventListener("click", function () {
	partIndexes["Part1_index"] =
		Math.floor(Math.random() * storySection1Vars.length) + 1;
	Part2_index = Math.floor(Math.random() * storySection2Vars.length) + 1;
	Part3_index = Math.floor(Math.random() * storySection3Vars.length) + 1;
	Part4_index = Math.floor(Math.random() * storySection4Vars.length) + 1;
	Part5_index = Math.floor(Math.random() * storySection5Vars.length) + 1;

	highlightSelected(storySection1Vars, partIndexes["Part1_index"] - 1);
	highlightSelected(storySection2Vars, Part2_index - 1);
	highlightSelected(storySection3Vars, Part3_index - 1);
	highlightSelected(storySection4Vars, Part4_index - 1);
	highlightSelected(storySection5Vars, Part5_index - 1);

	const randomStory = `${
		storySection1Vars[partIndexes["Part1_index"] - 1].textContent
	} ${storySection2Vars[Part2_index - 1].textContent} ${
		storySection3Vars[Part3_index - 1].textContent
	} ${storySection4Vars[Part4_index - 1].textContent} ${
		storySection4Vars[Part5_index - 1].textContent
	}.`;
	console.log("debug-> randomStory: " + randomStory);
});
//------ end of controll buttons
