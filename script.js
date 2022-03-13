// Object definition
const obj = {
    player: "Bobby",
    experience: 100,
    wizardLevel: false,
    record: "master"
}

//Access objects
// Old way of getting objects
/*
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
let record = obj.record;
*/

// New or Destructuring Objects
const { player, experience } = obj;
let { wizardLevel, record } = obj;

console.log(player,experience,wizardLevel,record);

// Template strings
/*
const name = "Sally";
const age = 34;
const pet = "horse";

const greeting = `Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have!`;

console.log(greeting);
*/

// Default Arguements
function greet(name="", age=30, pet='cat'){
    return `Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have!`;
}