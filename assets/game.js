var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = [];
var computerChoice =  letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {
    //this converts their guess into a lowercase letter
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //this checks if the letter is in the array index, and if it has already been used
    if (lettersGuessed.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        //this logs their guess into the array
        lettersGuessed[lettersGuessed.length] = userGuess;
        guessesLeft--;
    }
    
    if (computerChoice === userGuess) {
        wins++;
        guessesLeft = 9;
        lettersGuessed = [];
        computerChoice =  letters[Math.floor(Math.random() * letters.length)];
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        lettersGuessed = [];
        computerChoice =  letters[Math.floor(Math.random() * letters.length)];
    }

    var html = 
    "<h1> The Psychic game </h1>" +
    "<p> Guess what letter I'm thinking of </p>" +
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>" +
    "<p> Guesses Left: " + guessesLeft + "</p>" +
    "<p> Guesses so far: " + lettersGuessed + "</p>";
    document.querySelector("#game").innerHTML = html;
}