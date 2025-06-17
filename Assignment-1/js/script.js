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
  // 1) use partIndexes instead of bare globals:
  if (
    partIndexes["Part1_index"] >= 0 &&
    partIndexes["Part2_index"] >= 0 &&
    partIndexes["Part3_index"] >= 0 &&
    partIndexes["Part4_index"] >= 0 &&
    partIndexes["Part5_index"] >= 0
  ) {
    // 2) pull from storySection5Vars for the fifth part:
    const story = `${storySection1Vars[partIndexes["Part1_index"]].textContent} ${
      storySection2Vars[partIndexes["Part2_index"]].textContent
    } ${storySection3Vars[partIndexes["Part3_index"]].textContent} ${
      storySection4Vars[partIndexes["Part4_index"]].textContent
    } ${storySection5Vars[partIndexes["Part5_index"]].textContent}.`;
    console.log("debug-> currentStory:", story);
	showStoryModal(story);
  } else {
    console.log("Please complete all parts of the story before generating.");
  }
});


// Surprise button
document.getElementById("button6").addEventListener("click", function () {
	partIndexes["Part1_index"] =
		Math.floor(Math.random() * storySection1Vars.length) + 1;
	partIndexes["Part2_index"] = Math.floor(Math.random() * storySection2Vars.length) + 1;
	partIndexes["Part3_index"] = Math.floor(Math.random() * storySection3Vars.length) + 1;
	partIndexes["Part4_index"] = Math.floor(Math.random() * storySection4Vars.length) + 1;
	partIndexes["Part5_index"] = Math.floor(Math.random() * storySection5Vars.length) + 1;

	highlightSelected(storySection1Vars, partIndexes["Part1_index"] - 1);
	highlightSelected(storySection2Vars, partIndexes["Part2_index"] - 1);
	highlightSelected(storySection3Vars, partIndexes["Part3_index"] - 1);
	highlightSelected(storySection4Vars, partIndexes["Part4_index"] - 1);
	highlightSelected(storySection5Vars, partIndexes["Part5_index"] - 1);

	const randomStory = `${
		storySection1Vars[partIndexes["Part1_index"] - 1].textContent
	} ${storySection2Vars[partIndexes["Part2_index"] - 1].textContent} ${
		storySection3Vars[partIndexes["Part3_index"] - 1].textContent
	} ${storySection4Vars[partIndexes["Part4_index"] - 1].textContent} ${
		storySection5Vars[partIndexes["Part5_index"] - 1].textContent
	}.`;
	console.log("debug-> randomStory: " + randomStory);
	showStoryModal(randomStory);
});
//------ end of controll buttons


// -------- Modal popup to show the story --------
const modal       = document.getElementById("story-modal");
const storyTextEl = document.getElementById("story-text");
const closeBtn    = document.querySelector(".modal-close");

// helper to show any story string
function showStoryModal(text) {
  storyTextEl.textContent = text;
  modal.style.display = "flex";  // flex centers it with our CSS
}

// close on × click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close if you click outside the .modal-content
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
