/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        // The class should include a constructor that initializes the following properties:
        // 1. missed: used to track the number of missed guesses by the player.The initial value is 0, since no guesses have been made at the start of the game.
        this.missed = 0;
        // 2. phrases: an array of five Phrase objects to use with the game.A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
        this.phrases = this.createPhrases();
        // 3. activePhrase: This is the Phrase object that’s currently in play.The initial value is null.Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
        this.activePhrase = null;
    }


    /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases() {
        return [{
            phrase: "I love MTL"
        }, {
            phrase: "I love NY"
        }, {
            phrase: "I love QUEBEC"
        }, {
            phrase: "I love SF"
        }, {
            phrase: "I love NEW ORLEANS"
        }]
    };

    /**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        document.getElementById('overlay').style.display = "none";
        //  Select a Phrase object from the Game object’s array of phrases,
        const randomPhrase = game.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(minPhrasesIndex = 0, maxPhrasesIndex = 4) {
        const randomNumber = Math.random() * (maxPhrasesIndex - minPhrasesIndex) + minPhrasesIndex;
        const randomberNumberFloored = Math.floor(randomNumber);
        return this.phrases[randomberNumberFloored];
    };


    handleInteraction(letter) {
        game.activePhrase.phrase.checkLetter(letter);
        game.activePhrase.phrase.showMatchedLetter(letter);
        game.checkForWin();
        game.removeLife();
        game.gameOver();
    };

    /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
    removeLife() {
        if (checkLetter) {
            var select = document.querySelector('div#scoreboard ol');
            select.removeChild(select.lastChild);
        };
    }


    /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
    checkForWin() {
        const phraseCharacters = document.querySelectorAll('div#phrase ul li');
        if (phraseCharacters.textContent !== "") {


            // "Je pense que je dois convertir le string en string et trouver le nombre 
            // de caractères excluant les espaces"
        }
    }


    /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        // Select ul in which to add li letters of the phrase
        if (this.missed == 5) {
            document.getElementById('overlay').style.display = "display";
            document.getElementById('overlay').style.backgroundColor = "#F37963";
            document.getElementById('game-over-message').textContent = "Sorry, better luck next time!";
        }
        else if (checkForWin) {
            document.getElementById('overlay').style.display = "display";
            document.getElementById('overlay').style.backgroundColor = "#7BCE85";
            document.getElementById('game-over-message').textContent = "Great job";
        }
    };
}


