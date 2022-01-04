// Setting initial values
const container = document.querySelector('.container');

const roundsSection = document.querySelector('.rounds');

const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
const tiesElement = document.querySelector('#ties');

let playerScore = 0;
let computerScore = 0;
let ties = 0;

playerScoreElement.textContent = `${playerScoreElement.textContent.split(':')[0]}: ${playerScore}`;
computerScoreElement.textContent = `${computerScoreElement.textContent.split(':')[0]}: ${computerScore}`;
tiesElement.textContent = `${tiesElement.textContent.split(':')[0]}: ${ties}`;

// Adding listeners to buttons
const options = document.querySelectorAll('button.option');

options.forEach(button => button.addEventListener('click', clickedOption));

// Function to select a random option for the computer

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];

    let selection = options[Math.floor(Math.random() * options.length)];
    console.log(`Computers choice: ${selection}`);

    return selection;
}

// Function that generates a message with the result of the round

function displayResult(playerPlay, computerPlay, result) {
    if (result) {
        addRoundResult(`Congratulations you win, ${playerPlay} beats ${computerPlay}!`);

        playerScore += 1;
        playerScoreElement.textContent = `${playerScoreElement.textContent.split(':')[0]}: ${playerScore}`;
    } else {
        addRoundResult(`You lose pal, ${computerPlay} beats ${playerPlay}!`);

        computerScore += 1;
        computerScoreElement.textContent = `${computerScoreElement.textContent.split(':')[0]}: ${computerScore}`;
    }
}

// Function to add a new round result

function addRoundResult(message) {
    const result = document.createElement('p');
    result.classList.add('round');
    result.textContent = message;

    roundsSection.appendChild(result);
}

// Function to add winner header

function addWinnerHeader(element, message) {
    element.textContent = message;
    container.insertBefore(element, options[0]);

    options.forEach(button => button.removeEventListener('click', clickedOption));
}

// Plays a round of rock, paper, scissors based on the selection of the player and the selection of the computer

function playRound(playerPlay, computerPlay) {
    playerPlay = playerPlay.toLowerCase();

    if (playerPlay === computerPlay) {
        addRoundResult('It\'s a tie!');

        ties += 1;
        tiesElement.textContent = `${tiesElement.textContent.split(':')[0]}: ${ties}`;
    } else {
        switch (playerPlay) {
            case 'paper':
                displayResult(playerPlay, computerPlay, computerPlay === 'rock');
                break;
            case 'rock':
                displayResult(playerPlay, computerPlay, computerPlay === 'scissors');
                break;
            case 'scissors':
                displayResult(playerPlay, computerPlay, computerPlay === 'paper');
                break;
            default:
                console.log('Your input is not valid, use rock, paper or scissors');
        }
    }

    const winnerHeader = document.createElement('h2');

    if (playerScore === 5) {
        addWinnerHeader(winnerHeader, 'Congratulations, you are the winner ;)!');
    } else if (computerScore === 5) {
        addWinnerHeader(winnerHeader, 'Sorry pal, you were beaten by the computer :/!');
    }
}

// Define function when a button is clicked
function clickedOption(e) {
    playRound(e.target.id, computerPlay());
}