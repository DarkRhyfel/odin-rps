function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];

    let selection = options[Math.floor(Math.random() * options.length)];
    console.log(`Computers choice: ${selection}`);

    return selection;
}