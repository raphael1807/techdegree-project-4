/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

he class should include a constructor that initializes the following properties:
1. missed: used to track the number of missed guesses by the player.The initial value is 0, since no guesses have been made at the start of the game.
    
2. phrases: an array of five Phrase objects to use with the game.A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
    
3. activePhrase: This is the Phrase object that’s currently in play.The initial value is null.Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.


The class should also have these methods:
1. startGame(): hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
2. getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
3. handleInteraction(): this method controls most of the game logic.It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.This method should:
3.1 Disable the selected letter’s onscreen keyboard button.
    3.2 If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
3.3 If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
4. removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image(found in the images folder) and increments the missed property.If the player has five missed guesses(i.e they're out of lives), then end the game by calling the gameOver() method.
5. checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
6. gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.




class Patron {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.currentBook = null;
        this.balance = 0;
    }

    checkOut(book) {
        this.currentBook = book;
        book.out = true;
        book.patron = this;
    }

    returnBook(book) {
        this.currentBook = null;
        book.out = false;
        book.patron = null;
    }
}
