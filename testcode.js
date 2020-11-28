handleInteraction(letter) {
    phrase.checkLetter(letter);
    phrase.showMatchedLetter(letter);
    game.checkForWin();
    game.removeLife();
    game.gameOver(gameWon);

    console.log(e.target);
    const clickedkeyTextcontent = clickedKey.textContent;
    for (let i = 0; i < lettersOfThePhrase.length; i++) {
        if (clickedkeyTextcontent == lettersOfThePhrase[i].textContent) {
            lettersOfThePhrase[i].classList = `show letter ${lettersOfThePhrase[i].textContent}`;
            clickedKey.classList = 'chosen';
            console.log('True');
        }
        else if ((clickedkeyTextcontent !== lettersOfThePhrase[i].textContent)) {
            if (!alreadyplayerRemovelife) {
                this.removeLife();
                var alreadyplayerRemovelife = true;
            }

        }
    }
}
    });
};



else if ((clickedkeyTextcontent !== lettersOfThePhrase[i].textContent)) {
    console.log('FUCK YOU BITCH');
    if (!alreadyPlayed) {
        this.removeLife();
        var alreadyPlayed = true;
    }
    clickedKey.classList = 'wrong';


    else if ((clickedkeyTextcontent !== game.arrayofcharactersoftheActivephrase[i])) {
        console.log(`NO FIT`);
        console.log(game.arrayofcharactersoftheActivephrase[i]);
        game.missed++;
        console.log(`${game.missed} missed`);
        return false;
    }




    // else if (!checkLetter)
    else {
        letter.classList = 'wrong';



        const restartKeys = document.querySelectorAll('div.keyrow button');




        showMatchedLetter(letter) {
            const clickedkeyTextcontent = letter.textContent;
            const matchedInthePhrase = document.getElementsByClassName(`hide letter ${clickedkeyTextcontent}`);
            console.log(matchedInthePhrase);
            const numLoops = matchedInthePhrase.length;

            for (let i = 0; i < matchedInthePhrase.length; i++)
                matchedInthePhrase[i].classList.remove(`hide letter ${clickedkeyTextcontent}`) = `show letter ${clickedkeyTextcontent}`;
        }











        showMatchedLetter(letter) {
            const clickedkeyTextcontent = letter.textContent;
            const matchedInthePhrase = document.getElementsByClassName(`.hide.letter.${clickedkeyTextcontent}`);
            console.log(matchedInthePhrase);
            const numLoops = matchedInthePhrase.length;

            for (let i = 0; i < matchedInthePhrase.length; i++)
                matchedInthePhrase[i].classList.remove("hide");
            matchedInthePhrase[i].classList.add("show");
        }


        //     `showMatchedLetter()`: Reveals the letter(s) on the board that matches the
        // player's selection. To reveal the matching letter(s), select all of the letter DOM
        // elements that have a CSS class name that matches the selected letter and
        // replace each selected element's `hide` CSS class with the `show` CSS class.
        /**
        * Displays passed letter on screen after a match is found
        * @param (string) letter - Letter to display
        */
        showMatchedLetter(letter) {
            const clickedkeyTextcontent = letter.textContent;
            const matchedInthePhrase = document.getElementsByClassName(`hide letter ${clickedkeyTextcontent}`);

            const numLoops = matchedInthePhrase.length;

            for (let i = 0; i < matchedInthePhrase.length; i++)
                matchedInthePhrase[i].classList = `show letter ${clickedkeyTextcontent}`;
        }






// /*
// * Handles onscreen keyboard keydown events
// * @param (HTMLButtonElement) button - The clicked button element
// */
// document.addEventListener("keydown", (e) => {
//     const keyDowned = e.target;
//     console.log(keyDowned);
// });

// /*
// * Handles onscreen keyboard keyup events
// * @param (HTMLButtonElement) button - The clicked button element
// */
// document.addEventListener("keyup", (e) => {
//     const keyDowned = e.target;
//     console.log(keyDowned);
// });