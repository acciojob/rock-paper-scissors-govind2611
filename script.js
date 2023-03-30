//your code here
// Get the DOM elements
const playButton = document.querySelector('[data-ns-test="play-game"]');
const rockButton = document.querySelector('[data-ns-test="rock"]');
const paperButton = document.querySelector('[data-ns-test="paper"]');
const scissorsButton = document.querySelector('[data-ns-test="scissors"]');
const roundsLeftLabel = document.querySelector('[data-ns-test="rounds-left"]');
const userPointsLabel = document.querySelector('[data-ns-test="user-points"]');
const computerPointsLabel = document.querySelector('[data-ns-test="computer-points"]');
const roundResultLabel = document.querySelector('[data-ns-test="round-result"]');
const gameResultLabel = document.querySelector('[data-ns-test="game-result"]');
const computerChooseLabel = document.querySelector('[data-ns-test="computer-choose"]');
const gameNumberInput = document.querySelector('[data-ns-test="game-number"]');

// Set up the game variables
let roundsLeft;
let userPoints;
let computerPoints;
let gameNumber;
let computerChoose;

// Play button event listener
playButton.addEventListener('click', () => {
  // Initialize the game variables
  roundsLeft = gameNumberInput.value;
  userPoints = 0;
  computerPoints = 0;
  gameNumber = gameNumberInput.value;

  // Update the labels
  roundsLeftLabel.textContent = roundsLeft;
  userPointsLabel.textContent = userPoints;
  computerPointsLabel.textContent = computerPoints;
  roundResultLabel.textContent = '';
  gameResultLabel.textContent = '';
  computerChooseLabel.textContent = '';

  // Enable the buttons
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
});

// Rock button event listener
rockButton.addEventListener('click', () => {
  playRound('rock');
});

// Paper button event listener
paperButton.addEventListener('click', () => {
  playRound('paper');
});

// Scissors button event listener
scissorsButton.addEventListener('click', () => {
  playRound('scissors');
});

// Play a round of the game
function playRound(userChoice) {
  // Decrement the rounds left
  roundsLeft--;

  // Disable the buttons
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;

  // Generate a random computer choice
  computerChoose = Math.floor(Math.random() * 3);

  // Determine the result of the round
  if (userChoice === 'rock' && computerChoose === 0 ||
      userChoice === 'paper' && computerChoose === 1 ||
      userChoice === 'scissors' && computerChoose === 2) {
    roundResultLabel.textContent = 'TIE';
  } else if (userChoice === 'rock' && computerChoose === 2 ||
             userChoice === 'paper' && computerChoose === 0 ||
             userChoice === 'scissors' && computerChoose === 1) {
    roundResultLabel.textContent = 'WON';
    userPoints++;
  } else {
    roundResultLabel.textContent = 'LOSE';
    computerPoints++;
  }

  // Update the labels
  roundsLeftLabel.textContent = roundsLeft;
  userPointsLabel.textContent = userPoints;
  computerPointsLabel.textContent = computerPoints;
  computerChooseLabel.textContent = getComputerChoiceText(computerChoose);

  // Check if the game is over
  if (roundsLeft === 0) {
    endGame();
  } else {
    // Enable the buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
  }
}

// End
