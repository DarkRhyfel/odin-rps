function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];

    let selection = options[Math.floor(Math.random() * options.length)];
    console.log(`Computers choice: ${selection}`);

    return selection;
}

function playRound(playerPlay, computerPlay) {
    playerPlay = playerPlay.toLowerCase();

    if (playerPlay === computerPlay) {
        return 'It\'s a tie!';
    } else {
        switch (playerPlay) {
            case 'paper':
                if (computerPlay === 'rock') {
                    return 'Congratulations you win, paper beats rock!';
                } else {
                    return 'You lose, scissors beats paper!';
                }
            case 'rock':
                if (computerPlay === 'scissors') {
                    return 'Congratulations you win, rock beats scissors!';
                } else {
                    return 'You lose, paper beats rock!';
                }
            case 'scissors':
                if (computerPlay === 'paper') {
                    return 'Congratulations you win, scissors beats paper!';
                } else {
                    return 'You lose, rock beats scissors!';
                }
            default:
                return 'Your input is not valid, use rock, paper or scissors';
        }
    }
}

const playerPlay = 'paper';
const computerPlays = computerPlay();
console.log(`Test: ${playRound(playerPlay, computerPlays)}`);