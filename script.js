let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let checkButton = document.getElementById("check");
const guessInput = document.getElementById("guess");
const feedback = document.getElementById("feedback");
const attemptsSpan = document.getElementById("attempts");
const restartButton = document.getElementById("restart");

checkButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsSpan.textContent = attempts;

  if (guess === randomNumber) {
    feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    checkButton.disabled = true;
    restartButton.disabled = false;
  } else if (guess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }
});

restartButton.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsSpan.textContent = attempts;
  guessInput.value = "";
  feedback.textContent = "";
  checkButton.disabled = false;
  restartButton.disabled = true;
});
