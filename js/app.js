/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
1. Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
2. Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object.
Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button.Clicking the space between and around
the onscreen keyboard buttons should not result in the handleInteraction() method being called.



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
