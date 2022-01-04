// Setting initial values
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
}

// Define function when a button is clicked
function clickedOption(e) {
    playRound(e.target.id, computerPlay());
}

// Adding listeners to buttons
const options = document.querySelectorAll('button.option');

options.forEach(button => button.addEventListener('click', clickedOption));

function game(rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (i = 1; i <= rounds; i++) {
        let playerPlay = prompt('Enter your selection to play!', 'paper');

        let round = playRound(playerPlay, computerPlay());

        console.log(round.message);

        if (round.result === 2) {
            ties += 1;
        } else if (round.result === 1) {
            playerScore += 1;
        } else if (round.result === 0) {
            computerScore += 1;
        }
    }

    console.log(`Final Scores \
    Computer Score: ${computerScore} \
    Player Score: ${playerScore} \
    Ties: ${ties}`);
}