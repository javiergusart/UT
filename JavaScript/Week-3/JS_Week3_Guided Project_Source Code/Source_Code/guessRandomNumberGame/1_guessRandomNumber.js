/* Random Number Generator Game
--------------------------------------------------
Features:
    1. Generate a random number and have the user guess it.
    2. Use functions to handle guesses, and track the number of guesses taken.
    3. Implement Math.floor to limit the random number within a range.
    4. Use Math.ceil and Math.random to provide hints (e.g., whether the guess is too high or too low).
*/

function getRandomNumber(min, max) {
  // + 1 is added to ensure that the maximum value is inclusive;
  const range = max - min + 1;
  const random = Math.random() * range;
  return Math.floor(random);
}

// user guess needs to be a whole number int.
function checkGuess(guess, randomNumber) {
  // we will be comparing the user guess with the randomNumber;
  if (guess < randomNumber) {
    // give a hint is too low
    alert("Too Low!");
  } else if (guess > randomNumber) {
    // give a hint is too high
    alert("Too High!");
  } else {
    // they won
    alert("You won!");
    return;
  }
}

function playGame() {
  const min = 1;
  const max = 10;
  const randomNumber = getRandomNumber(min, max);
  let attempts = 0;
  let userGuess;
  const condition = userGuess !== randomNumber;

  // we will let the user take a guess *while* they guess the correct number.
  do {
    userPrompt = prompt(
      "Guess a number between: " + min + " and " + max + ": "
    );
    userGuess = parseInt(userPrompt);

    if (userPrompt === null) {
      return;
    }
    attempts++;
    checkGuess(userGuess, randomNumber);
  } while (condition);
}

// We will let the user take a guess while they gues the correct number

do {
  //TO-DO:
  //storing the guess that the user input
  // call checkGuess to check the user's guess
  //if incorrect increment attempts
  guess = prompt("Guess a number between: " + min + " and " + max + ": ");
  console.log("guess", userGuess);
  attempts++;
} while (condition);

// Start the game
playGame();
