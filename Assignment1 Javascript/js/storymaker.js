// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");
const showStudentIdButton = document.getElementById("showStudentId");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");
const studentIdParagraph = document.getElementById("studentId");


// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const resetButton = document.getElementById("reset");
const storyParagraph = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher","The elephant","The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like,","kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking","a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog","bug","worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass","in my shoes"];

// Variables for count to grab array elements
let selectedNoun1, selectedVerb, selectedAdjective, selectedNoun2, selectedSetting;

/* Functions
-------------------------------------------------- */

function showStudentInfo() {
    const studentName = "Chainpreet Singh"; // Replace with your actual name
    const studentId = "200592535";  // Replace with your actual student ID
    studentIdParagraph.innerText = `Student Name: ${studentName} | Student ID: ${studentId}`;
}


function noun1_on_click() {
    // variable to get array element and displaying it
    selectedNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    choosenNoun1.innerText = selectedNoun1;  // Display selected noun
}

function verb_on_click() {
    selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
    choosenVerb.innerText = selectedVerb;  // Display selected verb
}

function adjective_on_click() {
    selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    choosenAdjective.innerText = selectedAdjective;  // Display selected adjective
}

function noun2_on_click() {
    selectedNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    choosenNoun2.innerText = selectedNoun2;  // Display selected second noun
}

function setting_on_click() {
    selectedSetting = settings[Math.floor(Math.random() * settings.length)];
    choosenSetting.innerText = selectedSetting;  // Display selected setting
}

// concatenate the user story and display
function playback_on_click() {
    if (selectedNoun1 && selectedVerb && selectedAdjective && selectedNoun2 && selectedSetting) {
        let story = `Once upon a time, a ${selectedAdjective} ${selectedNoun1} ${selectedVerb} a ${selectedNoun2} ${selectedSetting}.`;
        storyParagraph.innerText = story;
    } else {
        storyParagraph.innerText = "Please choose all parts of the story!";
    }
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    let randomStory = `Once upon a time, a ${nouns1[Math.floor(Math.random() * nouns1.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} a ${nouns2[Math.floor(Math.random() * nouns2.length)]} ${settings[Math.floor(Math.random() * settings.length)]}.`;
    storyParagraph.innerText = randomStory;
}

// reset story
function reset_on_click() {
    storyParagraph.innerText = "";
    choosenNoun1.innerText = "";
    choosenVerb.innerText = "";
    choosenAdjective.innerText = "";
    choosenNoun2.innerText = "";
    choosenSetting.innerText = "";
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset_on_click);
// Show student info on click
showStudentIdButton.addEventListener("click", showStudentInfo);
