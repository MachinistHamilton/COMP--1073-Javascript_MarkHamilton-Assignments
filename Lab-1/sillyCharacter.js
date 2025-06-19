// VARIABLE DECLARATIONS

// Outout for jquery selector paragraph
let output = document.querySelector('#characterDescription');
// varaible to hold the character description with test default value.
let newDescription = "Test Debug";
//character name array to hold some names to randomly pick from.
let characterName = ["John","Jane","Peter","Mary"];
// age is a number between 1 and 100
let age = Math.floor(Math.random() * 100) + 1; // Random age between 1 and 100.
// boolean yes or no variable
let isSuperhero =  true;
// array of powers
let specialPowers = ["Invisibility", "Super Strength", "Flying"];
// array of food
let favoriteFood = ["Pizza", "Ice Cream", "HamBurgers", "Tacos"];

// creatre a variable 'genButton' to use with jquerySelector
// to select the button with id 'generateButton'
// and add an event listener to it that listens for a click event.
let genButton = document.querySelector('#generateButton');
genButton.addEventListener('click', updateDescription);

// Create a variable 'resetButton' to use with jquerySelector
// to select the button with id 'increaseAgeButton'
// Listen for the increaseAge button click event.
let increaseAgeButton = document.querySelector('#increaseAgeButton');
increaseAgeButton.addEventListener('click', increaseAge);

// Create a variable 'resetButton' to use with jquerySelector
// to select the button with id 'increaseButton'
// Listen for the decreaseAge button click event
let decreaseAgeButton = document.querySelector('#decreaseAgeButton');
decreaseAgeButton.addEventListener('click', decreaseAge);

// Create a variable 'resetButton' to use with jquerySelector
// to select the button with id 'increaseButton'
// Listen for the decreaseAge button click event
let userNameButton = document.querySelector('#userNameButton');
userNameButton.addEventListener('click', userName);


// Function to generate character description using the user's name
function generateUserDescription() {
    let newName = prompt('What is your name?');
    let randomPower = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    let randomFood = favoriteFood[Math.floor(Math.random() * favoriteFood.length)];

    userDescription = `Meet ${newName}, a ${age} year old superhero with the power of ${randomPower}. 
    They love to eat ${randomFood}.`;
}

// function to generate profile with user name.
function userName() {
    // run function.
    generateUserDescription();
    // output the result to the output element.
    output.textContent = userDescription;
}

// Function to generate a random character description from arryas.
function generateCharacterDescription() {
    let randomName = characterName[Math.floor(Math.random() * characterName.length)];
    let randomPower = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    let randomFood = favoriteFood[Math.floor(Math.random() * favoriteFood.length)];

    newDescription = `Meet ${randomName}, a ${age} year old superhero with the power of ${randomPower}. 
    They love to eat ${randomFood}.`;
}

// Function to update the character description in the output element
function updateDescription() {
    // generate a new character description
    generateCharacterDescription();
    // output the result to the output element.
    output.textContent = newDescription;
}







// Function to increment up age when increaseAge button is clicked , and then update the description
function increaseAge() {
    age++;
    updateDescription();
}

// Function to increment up age when increaseAge button is clicked , and then update the description
function decreaseAge() {
    age--;
    updateDescription();
}