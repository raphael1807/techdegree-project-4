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
    console.log(clickedKey);
    console.log(typeof clickedKey);
    if (clickedKey.tagName === "BUTTON") { game.handleInteraction(clickedKey) }
});

// Inspired by https://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed

function myKeyPress(e) {
    const keynum = e.keyCode;
    const stringFromKeyNum = String.fromCharCode(keynum);
    const htmlElement = document.querySelectorAll(".key").textContent = `${stringFromKeyNum}`;
    const stringtoHtml = `<button class="key">${stringFromKeyNum}</button>`;
    game.handleInteraction(stringFromKeyNum);

}