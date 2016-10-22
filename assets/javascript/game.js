//Global variable userGuess
var userGuess='';
var computerGuess = '';

//Creates an object that stores all the possible alphabet letters for the psychic game held by computer
var psychicGame = {
	letters:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	// Declares the tallies to 0 
	wins: 0,
	losses: 0,
	// Declares guessesLeft initial value to 9 
	totalGuesses: 9,
	guessesLeft: 9,
	//Create an array to store wrong letters chosen by user
	lettersGuessed: [],
	//1. Computer selects a random key from alphabet letters on keyboard.
	// computerGuess: '',
	//function to select random letter
	pickLetter: function(){
		computerGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
	},
	//function to display the number of wins on the document
	displayWins: function(){
		document.getElementById('wins').innerHTML = this.wins;
	},
	//function to display the number of losses
	displayLosses: function(){
		document.getElementById('losses').innerHTML = this.losses;
	},
	//Use a Function to render guesses Left using .innerHTML
	displayGuessesLeft: function(){
		document.getElementById('guesses-left').innerHTML = this.guessesLeft;
	},
	displayLettersGuessed: function(){
		document.getElementById('letters-guessed').innerHTML = this.lettersGuessed;
	},
	
	//If user's letter key selection matches computer's selected letter key, then Wins: increases by one., else Losses: increases by one. 
	increaseWins: function(){
		if(userGuess===computerGuess){
			this.wins++;
		}
	},
	//If user's guess doesn't match computer's selection, then "guesses left" decrease by 1. 
	increaseLosses: function(){
		if(this.guessesLeft===0){
			this.losses++;
		}
	},
	//If user's guess doesn't match computer's selection, then "your guesses so far", displays user's guess.
	wrongGuess: function(){
		if(userGuess!==computerGuess){
			this.guessesLeft--;
			this.lettersGuessed.push(userGuess);
		}
	},
	//After a loss or a win, reset
	resetGame: function(){
		if(userGuess===computerGuess || this.guessesLeft<=0){
			this.pickLetter();
			this.guessesLeft = this.totalGuesses;
			this.lettersGuessed = [];
		}
	}	
};
	 
//2. User presses a random key from alphabet on keyboard, it's recorded on key release and is also set to the variable userGuess
psychicGame.resetGame();
document.onkeyup = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	//3. Each user key press is matched to the computer's selected letter.
	psychicGame.increaseWins();
	psychicGame.wrongGuess();
	psychicGame.increaseLosses();
	psychicGame.resetGame();
	psychicGame.displayWins();
	psychicGame.displayLosses();
	psychicGame.displayGuessesLeft();
	psychicGame.displayLettersGuessed();
};




	


