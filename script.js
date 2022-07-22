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
