/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
* Begins game by selecting a random phrase and displaying it to user
*/

let game;
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener("click", function () {
    game = new Game();
    game.startGame();
});

/*
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
const lettersOfThePhrase = document.querySelectorAll('div#phrase ul li');
const keyrowKeys = document.querySelector('div#qwerty');
keyrowKeys.addEventListener("click", (e) => {
    const clickedKey = e.target;
    if (clickedKey.tagName === "BUTTON") { game.handleInteraction(clickedKey); }
});

/*
* Handles onscreen keyboard keydown events
* @param (HTMLButtonElement) button - The clicked button element
*/
document.addEventListener("keydown", (e) => {
    const keyDowned = e.target;
    console.log(keyDowned);
});

/*
* Handles onscreen keyboard keyup events
* @param (HTMLButtonElement) button - The clicked button element
*/
document.addEventListener("keyup", (e) => {
    const keyDowned = e.target;
    console.log(keyDowned);
});




