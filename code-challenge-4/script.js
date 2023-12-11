
// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuessInput = document.getElementById('userGuess');
  const resultDisplay = document.getElementById('result');

  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  if (userGuess === secretNumber) {
    resultDisplay.innerHTML = 'Congratulations! You guessed the correct number.';
    resultDisplay.style.color = 'green';
    userGuessInput.disabled = true;
  } else {
    const hint = userGuess < secretNumber ? 'Too low!' : 'Too high!';
    resultDisplay.innerHTML = `Incorrect. ${hint} Try again.`;
    resultDisplay.style.color = 'red';
    userGuessInput.value = ''; // Clear the input for the next guess
  }
}

