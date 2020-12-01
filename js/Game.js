/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        // The class should include a constructor that initializes the following properties:
        // 1. missed: used to track the number of missed guesses by the player.The initial value is 0, since no guesses have been made at the start of the game.
        this.missed = 0;
        // 2. phrases: an array of five Phrase objects to use with the game.A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
        this.phrases = [{
            phrase: "I love MTL"
        }, {
            phrase: "I love NY"
        }, {
            phrase: "I love QUEBEC"
        }, {
            phrase: "I love SF"
        }, {
            phrase: "I love NEW ORLEANS"
        }];
        // 3. activePhrase: This is the Phrase object that’s currently in play.The initial value is null.Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
        this.activePhrase = null;
    }

    /**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        // Restart li sentence
        document.querySelector('div#phrase ul').innerHTML = "";

        // Restart keyboard buttons class and take off
        for (let i = 0; i < document.querySelectorAll('div.keyrow button').length; i++) {
            document.querySelectorAll('div.keyrow button')[i].classList = "key";
            document.querySelectorAll('div.keyrow button')[i].removeAttribute("disabled");
        };

        // Restart number of lives
        document.querySelector('div#scoreboard ol').innerHTML = "";
        document.querySelector('div#scoreboard ol').insertAdjacentHTML('beforeEnd', `<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`);

        // Restart missed
        this.missed = 0;

        // Hides start screen overlay
        document.getElementById('overlay').style.display = "none";
        //  Select a Phrase object from the Game object’s array of phrases,
        this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
            */
    getRandomPhrase(minPhrasesIndex = 0, maxPhrasesIndex = 5) {
        const randomNumber = Math.random() * (maxPhrasesIndex - minPhrasesIndex) + minPhrasesIndex;
        const randomberNumberFloored = Math.floor(randomNumber);
        return this.phrases[randomberNumberFloored];
    }

    /**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(letter) {
        console.log('called');
        // If letter clicked or pressed is in the phrase
        if (this.activePhrase.checkLetter(letter) == true) {
            letter.classList = 'chosen';
            letter.setAttribute("disabled", "");
            this.activePhrase.showMatchedLetter(letter);
            game.checkForWin();
        }

        else {
            letter.classList = 'wrong';
            letter.setAttribute("disabled", "");
            game.removeLife();
        }
    }

    /**
    * Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
            won
            */
    checkForWin() {
        if (document.querySelectorAll('.hide.letter').length == 0) {
            this.gameOver(true);
            return true;
        }
        else {
            return false;
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        game.missed++;
        game.gameOver();
        let liveHeartImages = document.querySelectorAll("img[src='images/liveHeart.png']");
        liveHeartImages[liveHeartImages.length - 1].src = "images/lostHeart.png";
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
            */
    gameOver(gameWon) {
        if (this.missed == 5) {
            document.getElementById('overlay').style.display = "";
            document.getElementById('overlay').style.backgroundColor = "#F37963";
            document.getElementById('game-over-message').textContent = "Sorry, better luck next time!";
        }
        else if (gameWon) {
            document.getElementById('overlay').style.display = "";
            document.getElementById('overlay').style.backgroundColor = "#7BCE85";
            document.getElementById('game-over-message').textContent = "Great job";
        }
    };
}


