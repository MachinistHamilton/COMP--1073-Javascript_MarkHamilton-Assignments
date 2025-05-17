/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
/*•	Create variables to store character attributes:
•	characterName (string)
•	age (number)
•	isSuperhero (boolean)
•	specialPowers (array)
•	favoriteFood (string)
*/

// select the paragragh named characterDescription
let element = document.querySelector('#characterDescription');
let characterFirstName = ["John","Jane","Peter","Mary"];
let characterLastName = ["Doe","Smith","Parker","Johnson"];
let age = 25;
let isSuperhero =  true;
let specialPowers = ["Invisibility", "Super Strength", "Flying"];
let favoriteFood = ["Pizza", "Ice Cream", "HamBurgers", "Tacos"];

// make variables to  hold the current name and age
let currentName = "John Doe";
let currentAge = 25;

// ------------ Function to generate a random character description

// (array) is the parameter passed to the function
function randomEntry(array){
// Math.random() generates a random number between 0 and 1
const randomIndex = Math.floor(Math.random() * array.length);
// retrun a random index from the array
return array[randomIndex];
}

// Function to generate a random character name
function generateRandomName() {
    // Generate a random first and last name
    const firstName = randomEntry(characterFirstName);
    const lastName = randomEntry(characterLastName);
    return `${firstName} ${lastName}`;
}
// Function for a random age
function makeRandomAge() {
    // math.floor() rounds down to the nearest whole number
    // Math.random() generates a random number between 0 and 1
    const randomAge = Math.floor(Math.random() * 100) + 1;

    return randomAge;
}
// build the character description
function buildCharacterDescription() {
    // make variables inside the function to hold the values made by the functions
    let characterName = generateRandomName();
    let age = makeRandomAge();


    // Create a character description using string manipulation from lesson 2 week 2
    const description = `Meet ${currentName}, a ${currentAge}-year-old ${
        isSuperhero ? "superhero" : "ordinary person"
    } who loves ${favoriteFood.join(", ")}. Their special powers include ${specialPowers.join(", ")}.`;
    return description;
}


// Functions to update character's age


// Function to update the character's description after changing age


// Add event listeners for buttons using querySelector
// grab the button from the html document
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function () {
    output.textContent = buildCharacterDescription();
});
