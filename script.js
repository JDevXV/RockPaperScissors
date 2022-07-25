
//Assign dom elements to variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors');

//Create Image Objects to id and src key value pairs
const rockImage = {
	id: 'ROCK',
	src: '<img id="ROCK" src="images/rock.png" height="100">',
}
const paperImage = {
	id: 'PAPER',
	src: '<img id="PAPER" src="images/paper.png" height="100">',
}
const scissorImage = {
	id: 'SCISSOR',
	src: '<img id="SCISSOR" src="images/scissors.png" height="100">',
}

//Assign score DOMs to variables
const gamesUserWon = document.getElementById('gamesUserWon');
const gamesCPUWon = document.getElementById('gamesCPUWon');

//Displays what you and the computer chose
const you = document.getElementById('yourChoice');
const computer = document.getElementById('CPUChoice');

// Assign status DOM to a variable
const status = document.getElementById('status');

//Player turns left
const userTurnsLeft = document.getElementById('userTurnsLeft');



//ASSIGN reset DOM to variable
const reset = document.getElementById('reset');

//your Starting Score
let gamesUserWonInteger = 0;

//computer Starting Score
let gamesCPUWonInteger = 0;

//Turns to win
const toWin = 5;

//Initialize Turns left DOMs to value of 'turns'
userTurnsLeft.innerHTML = toWin;

//Keep track of each round.  Initialize to 0;
let round = 0;

//Keep track of turns remaining
let turnsLeft = toWin;

//initialize 'status' to 'Round 0'
status.innerHTML = `Round ${round}`;

//Calculate score for each round
const roundWinner = (you, computer) => {
	if(you === 'ROCK' && computer === 'SCISSOR' || 
		you === 'PAPER' && computer === 'ROCK' ||
		you === 'SCISSOR' && computer === 'PAPER'){
			//Increment your integer
			gamesUserWonInteger += 1;

			//increment round integer
			round += 1;

			//calculate turns left before game is over
			turnsLeft--;
		
			//Assign integer to 'gamesUserWon' innerHTML value
			gamesUserWon.innerHTML = gamesUserWonInteger;

			//Update turns left
			userTurnsLeft.innerHTML = turnsLeft;

			//Update status to current Round
			status.innerHTML = `Round ${round} - YOU!`;

			// Console when round is lost
			console.log(`You WIN round ${round}! ${turnsLeft} turns left!`);
	}
	else if(you === computer){

		//increment round integer
		round += 1;

		//calculate turns left before game is over
		turnsLeft--;

		// Update status to current Round
		status.innerHTML = `Round ${round} - DRAW!`;

		//Update turns left
		userTurnsLeft.innerHTML = turnsLeft;

		//Console log if Draw
		console.log(`Round ${round} is a DRAW!`);
	} 
	else {
		//Increment computer integer
		gamesCPUWonInteger += 1;

		//Increment round integer
		round += 1;

		//calculate turns left before game is over
		turnsLeft--;

		//Assign integer to 'gamesCPUWon' innerHTML value
		gamesCPUWon.innerHTML = gamesCPUWonInteger;

		//Update turns left
		userTurnsLeft.innerHTML = turnsLeft;

		// Update status to current Round
		status.innerHTML = `Round ${round} - CPU!`;

		//Console.log when round is lost
		console.log(`You LOSE round ${round}! ${turnsLeft} turns left!`);
	}
}

//Game Over
const gameOver = () =>{
	if(gamesUserWonInteger > gamesCPUWonInteger && round === toWin){
		console.log(round)
		
		//Set status innerHTML to 'WIN'
		status.innerHTML = 'YOU WIN!';

		//Console log when you WIN and game is OVER
		console.log('YOU WIN....  PRESS RESET TO PLAY AGAIN!')
		return;
	}
	
	if(gamesCPUWonInteger > gamesUserWonInteger  && round === toWin){
		//Set Staus innerHTML to 'LOSE'
		status.innerHTML = 'YOU LOSE!';

		//Console.log when you LOSE and game is over
		console.log('YOU LOSE....  PRESS RESET TO PLAY AGAIN');
		return;
	}
	if(gamesCPUWonInteger === gamesUserWonInteger  && round === toWin){
		//Set Staus innerHTML to 'LOSE'
		status.innerHTML = 'NO WINNER!';
		return;
	}

}

//Event Listener for ROCK div
rock.addEventListener('click', (e) => {
	// Check if max 'turns' have been reached
	if(gamesUserWonInteger < toWin && gamesCPUWonInteger < toWin && round < toWin){

		//*NEW Array of objects for computer choices
		const choices = [rockImage, paperImage, scissorImage];
		
		//Randomly generated number from 0 - 2 for computer choices
		const CPUChoice = Math.floor(Math.random() * choices.length);

		//*NEW assign image to innerHTML
		you.innerHTML = rockImage.src;

		//*NEW Create another variable to pass as an argument in the 'winner' function. 
		let youChose = rockImage.id;

		//Assign 'rockImage.src' value to produce image
		computer.innerHTML = choices[CPUChoice].src;

		//Assign 'rockImage.id' to pass as string argument in 'roundWinner' function
		let computerChose = choices[CPUChoice].id;

		//Call winner function and pass 'youChose' and 'computerChose' as arguments
		roundWinner(youChose, computerChose);
		}

	// Call Game over function to check who reached 'turns' first;
	gameOver();
})


//Event Listener for PAPER div
paper.addEventListener('click', (e) => {
	if(gamesUserWonInteger < toWin && gamesCPUWonInteger < toWin && round < toWin){

		//*NEW Array of objects for computer choices
		const choices = [rockImage, paperImage, scissorImage];
		
		//Randomly generated number from 0 - 2 for computer choices
		const CPUChoice = Math.floor(Math.random() * choices.length);

		//*NEW assign image to innerHTML
		you.innerHTML = paperImage.src;

		//*NEW Create another variable to pass as an argument in the 'winner' function. 
		let youChose = paperImage.id;

		//Assign 'rockImage.src' value to produce image
		computer.innerHTML = choices[CPUChoice].src;

		//Assign 'rockImage.id' to pass as string argument in 'roundWinner' function
		let computerChose = choices[CPUChoice].id;

		//Call winner function and pass 'youChose' and 'computerChose' as arguments
		roundWinner(youChose, computerChose);
	}

	gameOver();
})


//Event Listener for SCISSOR div
scissor.addEventListener('click', (e) => {
	if(gamesUserWonInteger < toWin && gamesCPUWonInteger < toWin && round < toWin){

		//*NEW Array of objects for computer choices
		const choices = [rockImage, paperImage, scissorImage];
		
		//Randomly generated number from 0 - 2 for computer choices
		const CPUChoice = Math.floor(Math.random() * choices.length);

		//*NEW assign image to innerHTML
		you.innerHTML = scissorImage.src;

		//*NEW Create another variable to pass as an argument in the 'winner' function. 
		let youChose = scissorImage.id;

		//Assign 'rockImage.src' value to produce image
		computer.innerHTML = choices[CPUChoice].src;

		//Assign 'rockImage.id' to pass as string argument in 'roundWinner' function
		let computerChose = choices[CPUChoice].id;

		//Call winner function and pass 'youChose' and 'computerChose' as arguments
		roundWinner(youChose, computerChose);
	}

	gameOver();
})


//RESET all fields to play again
reset.addEventListener('click', (e) => {
	//set scores for 'you' and 'computer' back to zero
	gamesUserWonInteger = 0;
	gamesCPUWonInteger = 0;

	//assign new value to innerHTML
	gamesUserWon.innerHTML = gamesUserWonInteger;
	gamesCPUWon.innerHTML = gamesCPUWonInteger;

	//reset round to 0
	round = 0;

	//Assign updated round to status
	status.innerHTML = `Round ${round} - `;

	//reset user choice
	you.innerHTML = 'CHOOSE';

	//reset cpu choice
	computer.innerHTML = 'CHOOSE';

	//reset turns left
	turnsLeft = toWin;

	//reset turnsLeft innerHTML
	userTurnsLeft.innerHTML = turnsLeft;

})
