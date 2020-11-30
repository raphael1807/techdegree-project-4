/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        for (var i = 0; i < this.phrase.length; i++) {
            // Select ul in which to add li letters of the phrase
            const divPhraseUl = document.querySelector('div#phrase ul');

            // If character of the phrase is not a space
            if (this.phrase.charAt(i) !== " ") {
                var liLetter = document.createElement("li");
                liLetter.classList = `hide letter ${this.phrase.charAt(i)}`;
                liLetter.textContent = `${this.phrase.charAt(i)}`;
                divPhraseUl.appendChild(liLetter);
            }
            // If character of the phrase is a space 
            else {
                var liSpace = document.createElement("li");
                liSpace.classList = "hide space";
                liSpace.textContent = " ";
                divPhraseUl.appendChild(liSpace);
            }
        }
    }

    // `checkLetter()`: Checks to see if the letter selected by the player matches a letter
    // in the phrase.
    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        const clickedkeyTextcontent = letter.textContent;
        if (this.phrase.includes(clickedkeyTextcontent)) {
            return true;
        }
        else {
            return false;

        }
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
        const matchedInthePhrase = document.querySelectorAll('li.hide.letter');
        const numLoops = matchedInthePhrase.length;

        for (let i = 0; i < matchedInthePhrase.length; i++) {
            if (matchedInthePhrase[i].textContent == clickedkeyTextcontent)
                matchedInthePhrase[i].classList = `show letter ${clickedkeyTextcontent}`;
        }
    }
}



