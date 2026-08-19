console.log("Rock Paper Scissors game");

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const result = document.querySelector("#result");
const score = document.querySelector("#score");

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    
    let cChoice = Math.floor(Math.random() * 3);

    return choices[cChoice];
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        result.textContent =
            `Draw... you both chose ${playerSelection}`;
    }


    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {

        humanScore++;

        result.textContent =
            `You win! ${playerSelection} beats ${computerSelection}.`;
    }



    else {

        computerScore++;

        result.textContent =
            `You lose! ${computerSelection} beats ${playerSelection}.`;
    }



    score.textContent =
        `You: ${humanScore} | Computer: ${computerScore}`;


  
    if (humanScore === 5) {

        result.textContent = "🎉 You won the game!";

        disableButtons();
    }

    else if (computerScore === 5) {

        result.textContent = "Computer won the game!";

        disableButtons();
    }
}




function disableButtons() {

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}



rockButton.addEventListener("click", function () {

    const computerChoice = getComputerChoice();

    playRound("rock", computerChoice);
});


paperButton.addEventListener("click", function () {

    const computerChoice = getComputerChoice();

    playRound("paper", computerChoice);
});


scissorsButton.addEventListener("click", function () {

    const computerChoice = getComputerChoice();

    playRound("scissors", computerChoice);
});