function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];

    let selection = options[Math.floor(Math.random() * options.length)];
    console.log(`Computers choice: ${selection}`);

    return selection;
}

function playRound(playerPlay, computerPlay) {
    playerPlay = playerPlay.toLowerCase();

    if (playerPlay === computerPlay) {
        return {
            result: 2,
            message: 'It\'s a tie!'
        };
    } else {
        switch (playerPlay) {
            case 'paper':
                return {
                    result: Number(computerPlay === 'rock'),
                    message: displayResult(playerPlay, computerPlay, computerPlay === 'rock')
                };
            case 'rock':
                return {
                    result: Number(computerPlay === 'scissors'),
                    message: displayResult(playerPlay, computerPlay, computerPlay === 'scissors')
                };
            case 'scissors':
                return {
                    result: Number(computerPlay === 'paper'),
                    message: displayResult(playerPlay, computerPlay, computerPlay === 'paper')
                };
            default:
                return {
                    result: -1,
                    message: 'Your input is not valid, use rock, paper or scissors'
                };
        }
    }
}

function displayResult(playerPlay, computerPlay, result) {
    if (result) {
        return `Congratulations you win, ${playerPlay} beats ${computerPlay}!`;
    } else {
        return `You lose pal, ${computerPlay} beats ${playerPlay}!`;
    }
}

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

game();