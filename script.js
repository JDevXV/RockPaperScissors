//Assign dom elements to variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

//Displays what you and the computer chose
const you = document.getElementById('yourChoice');
const computer = document.getElementById('computerChoice');

// const winner = (you, computer) => {
// 	if(you === 'ROCK' && computer === 'SCISSOR'){
// 		console.log('do something')
// 	}
// } 

//Event Listener for ROCK div
rock.addEventListener('click', (e) => {
	//Array for computer choices
	const choices = ['ROCK', 'PAPER', 'SCISSOR'];
	//Randomly generated number from 0 - 2 for computer choices
	const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

	//Change inner Div for 'yourChoice'
	you.innerHTML = 'ROCK';
	//Create another variable to pass as an argument in the 'winner' function. NOT YET USED
	let yourChoice = you.innerHTML = 'ROCK';
	//Change inner Div for 'computerChoice' to array index item
	computer.innerHTML = choices[computerChoice];

	// console.log(yourChoice)
})

//Event Listener for PAPER div
paper.addEventListener('click', (e) => {
	const choices = ['ROCK', 'PAPER', 'SCISSOR'];
	const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

	you.innerHTML = 'PAPER';
	let yourChoice = you.innerHTML = 'PAPER';
	computer.innerHTML = choices[computerChoice];

	// console.log(yourChoice)
})

//Event Listener for SCISSOR div
scissor.addEventListener('click', (e) => {
	const choices = ['ROCK', 'PAPER', 'SCISSOR'];
	const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

	you.innerHTML = 'SCISSOR';
	let yourChoice = you.innerHTML = 'SCISSOR';
	computer.innerHTML = choices[computerChoice];

	// console.log(yourChoice)
})

//IMPLEMENTED SCORE KEEPING SYSTEM

//Assign dom elements to variables
// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissor = document.getElementById('scissor');

// //Assign score DOMs to variables
// const yourScore = document.getElementById('yourScore');
// const computerScore = document.getElementById('computerScore');

// //Displays what you and the computer chose
// const you = document.getElementById('yourChoice');
// const computer = document.getElementById('computerChoice');

// //your Starting Score
// let yourScoreInteger = 0;

// //computer Starting Score
// let computerScoreInteger = 0;

// //Function that takes you and computer as arguments
// const winner = (you, computer) => {
// 	if(you === 'ROCK' && computer === 'SCISSOR' || 
// 		you === 'PAPER' && computer === 'ROCK' ||
// 		you === 'SCISSOR' && computer === 'PAPER'){
// 			//Increment your integer
// 			yourScoreInteger += 1;
// 			//Assign integer to 'yourScore' innerHTML value
// 			yourScore.innerHTML = yourScoreInteger;
// 			console.log('you win', yourScoreInteger)
// 	}

// 	else if(you === computer){
// 		console.log('draw');
// 	} 
	
// 	else {
// 		//Increment computer integer
// 		computerScoreInteger += 1;
// 		//Assign integer to 'computerScore' innerHTML value
// 		computerScore.innerHTML = computerScoreInteger;
// 		console.log('you lose')

// 	}
// } 

// //Event Listener for ROCK div
// rock.addEventListener('click', (e) => {
// 	//Array for computer choices
// 	const choices = ['ROCK', 'PAPER', 'SCISSOR'];
// 	//Randomly generated number from 0 - 2 for computer choices
// 	const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

// 	//Change inner Div for 'yourChoice'
// 	you.innerHTML = 'ROCK';
// 	//Create another variable to pass as an argument in the 'winner' function. 
// 	let youChose = you.innerHTML = 'ROCK';
// 	//Change inner Div for 'computerChoice' to array index item
// 	computer.innerHTML = choices[computerChoice];
// 	let computerChose = computer.innerHTML = choices[computerChoice];

// 	//Call winner function and pass 'youChose' and 'computerChose' as arguments
// 	winner(youChose, computerChose);

// 	// console.log(youChose)
// })

// //Event Listener for PAPER div
// paper.addEventListener('click', (e) => {
// 	const choices = ['ROCK', 'PAPER', 'SCISSOR'];
// 	const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

// 	you.innerHTML = 'PAPER';
// 	let youChose = you.innerHTML = 'PAPER';
// 	computer.innerHTML = choices[computerChoice];
// 	let computerChose = computer.innerHTML = choices[computerChoice];

// 	winner(youChose, computerChose);

// 	// console.log(yourChoice)
// })

// //Event Listener for SCISSOR div
// scissor.addEventListener('click', (e) => {
// 	const choices = ['ROCK', 'PAPER', 'SCISSOR'];
// 	const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

// 	you.innerHTML = 'SCISSOR';
// 	let youChose = you.innerHTML = 'SCISSOR';
// 	computer.innerHTML = choices[computerChoice];
// 	let computerChose = computer.innerHTML = choices[computerChoice];

// 	winner(youChose, computerChose);

// 	// console.log(yourChoice)
// })
