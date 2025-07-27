/* Random Number Generator Game
--------------------------------------------------
Features:
    1. Generate a random number and have the user guess it.
    2. Use functions to handle guesses, and track the number of guesses taken.
    3. Implement Math.floor to limit the random number within a range.
    4. Use Math.ceil and Math.random to provide hints (e.g., whether the guess is too high or too low).
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(guess, randomNumber) {
    if (guess < randomNumber) {
        console.log("Too low!");
    } else if (guess > randomNumber) {
        console.log("Too high!");
    } else {
        console.log("Congratulations! You guessed the number!");
    }
}

function playGame() { 
    let min = 1;
    let max = 10;
    let randomNumber = getRandomNumber(min, max);
    let guess = 5;
    let attempts = 0;

    do {
        checkGuess(guess, randomNumber);
        attempts++;
        randomNumber = getRandomNumber(min, max);
        console.log(`Random Number: ${randomNumber}`); // For debugging
    } while (guess !== randomNumber);

    console.log(`You guessed the number in ${attempts} attempts!`);
}

// Start the game
playGame();