let output = document.querySelector('#characterDescription');
let newDescription = "TEST TEST TEST";
let characterName = ["John","Jane","Peter","Mary"];
let age = Math.floor(Math.random() * 100) + 1; // Random age between 1 and 100
let isSuperhero =  true;
let specialPowers = ["Invisibility", "Super Strength", "Flying"];
let favoriteFood = ["Pizza", "Ice Cream", "HamBurgers", "Tacos"];

let genButton = document.querySelector('#generateButton');
genButton.addEventListener('click', updateDescription);
    
    
function updateDescription() {

    output.textContent = newDescription;
}