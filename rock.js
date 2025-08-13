const choices = document.querySelectorAll('.choice');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');
const playAgainBtn = document.getElementById('play-again');

const icons = {
    rock: '<i class="fa-solid fa-hand-back-fist"></i>',
    paper: '<i class="fa-solid fa-hand"></i>',
    scissors: '<i class="fa-solid fa-hand-scissors"></i>'
};

let playerChoice, computerChoice;

choices.forEach(button => {
    button.addEventListener('click', () => {
        playerChoice = button.dataset.choice;
        computerChoice = getComputerChoice();
        resultText.classList.add("anime");
        resultText.classList.add("anime");
        displayChoices();
        showResult();
        togglePlayAgain(true);
    });
});

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

function displayChoices() {
    playerChoiceEl.innerHTML = icons[playerChoice];
    computerChoiceEl.innerHTML = icons[computerChoice];
}

function showResult() {
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a Draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = 'You Win!';
    } else {
        resultText.textContent = 'You Lose!';
    }
}

function togglePlayAgain(show) {
    playAgainBtn.classList.toggle('hide', !show);
    choices.forEach(btn => btn.disabled = show);
}

playAgainBtn.addEventListener('click', () => {
    playerChoiceEl.innerHTML = '';
    computerChoiceEl.innerHTML = '';
    resultText.textContent = 'Make your move!';
    togglePlayAgain(false);
    resultText.classList.remove("anime");
    resultText.classList.remove("anime");
});
