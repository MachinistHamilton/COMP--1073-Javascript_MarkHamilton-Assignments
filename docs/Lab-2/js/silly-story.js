// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables
- customName for the name field
- randomize for the button
- story for the paragraph that outputs the final story
*/

// variable named "customName" for the name field, uses getElementById to grab the 
// input element with id "customname"
var customName = document.querySelector('#customname'); // # to select id
// variable with name "randomize" for the button, uses getElementById to 
// grab the button element with id "randomize"
var randomize = document.querySelector('.randomize'); // . to select class
// variable with name "story" for the paragraph that outputs the final story
var story = document.querySelector('.story'); // . to slect class

/* STEP 3: Create the variable that contains the story string that will be modified 
- use var storyText to containt the following:
'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, 
they stared in horror for a few moments, then :insertz:.
 Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, 
 and it was a hot day.'
*/

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

/* STEP 4: Create three arrays, insertX, insertY, and insertZ, 
assigning them the following array values respectively:
Donald Trump, Jackie Chan, Santa Claus
Area 51, Death Valley, Aruba
spontaneously combusted, rapidly sublimated, evaporated instantly
*/

// Arrays
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

/* STEP 2: have a look at the following function - if you call 
this function and pass it an array, it will return one of the elements of that array randomly */
function randomValueFromArray(array){
	return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: Review the partially complete result() function below */
function result() {
	// STEP 7: Create a new variable called newStory and set it to the value of storyText
	//  - we don't want to overwrite the original story!
	var newStory = storyText;

	/* STEP 8: Use the randomValueFromArray() function to generate a value for each of three new variables - xItem, yItem, and zItem
	Call up the function and for each variable, pass it the array from which to grab a random string - for example if insertW was an array of strings, I would type:
	var wItem = randomValueFromArray(insertW); */
	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);

	/* STEP 9: Replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem. Each time, be sure to update the variable newStory (with +=). You might need to do one of the above replacements twice! */

	// The replace() method is used to replace the first occurrence of a specified value in a string with another value.
	// /g is a regular expression flag that stands for "global," meaning it will replace all occurrences of the specified value in the string.
	newStory = newStory.replace(/:insertx:/g, xItem);
	newStory = newStory.replace(/:inserty:/g, yItem);
	newStory = newStory.replace(/:insertz:/g, zItem);

	/* STEP 10: If the user has typed a name in the customName field, replace the name 'Bob' in the story with whatever they typed */
	if(customName.value !== '') {
		var name = customName.value; // Get the value from the customName input field and make name variable set to it.
		newStory = newStory.replace(/Bob/g, name); // Replace 'Bob' in the story with the name variable
	}

	/* STEP 11: If the metric radio button has been checked, we need to convert the temperature and mass numbers in the story */
	if(document.getElementById("metric").checked) {
		// STEP 11a: Create a variable called weight and convert the 300lbs to kgs (1lb = 0.453592kg)
		var weight = Math.round(300 * 0.453592); // Convert 300 pounds to kilograms
		// STEP 11b: Replace the string 300 pounds with the updated weight in kg
		newStory = newStory.replace(/300 pounds/g, weight + ' kilograms');

		// STEP 12a: Create a variable called temp and convert °F to °C ... the formula for conversion is °C = (°F - 32) x 5/9
		var temp = Math.round((94 - 32) * 5/9); // Convert 94°F to Celsius
		// STEP 12b: Replace the string '94 fahrenheit' with the updated temperature in °C
		newStory = newStory.replace(/94 fahrenheit/g, temp + ' centigrade');
	}

	/* STEP 13: Make the textContent property of the story variable (which references the paragraph) equal to newStory */
	story.textContent = newStory;

	// The following line makes the paragraph visible
	story.style.visibility = 'visible';
}

// EVENT LISTENERS
/* STEP 5: Add a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run. */
randomize.addEventListener('click', result);

// This lab based on the excellent assessment challenge at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator
