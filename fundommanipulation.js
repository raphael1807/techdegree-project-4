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