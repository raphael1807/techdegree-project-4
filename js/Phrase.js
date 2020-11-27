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

    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        const clickedkeyTextcontent = letter.textContent;
        for (let i = 0; i < lettersOfThePhrase.length; i++) {
            if (clickedkeyTextcontent == lettersOfThePhrase[i].textContent) {
                return true;
            }
            else if ((clickedkeyTextcontent !== lettersOfThePhrase[i].textContent)) {
                game.missed++;
                return false;
            }

        }
    }


    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        if (checkLetter) {
            lettersOfThePhrase[i].classList = `show letter ${lettersOfThePhrase[i].textContent}`;
            letter.classList = 'chosen';
        }
        // else if (!checkLetter)
        else {
            letter.classList = 'wrong';
        }
    }
}


