let choices = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

function computeWinner(playerChoice, computerChoice)
{
    playerChoice = playerChoice.toLowerCase();
    
    if (computerChoice === playerChoice)
    {
        return 0;
    }

    // Assuming input is validated, which it is
    if (playerChoice === "rock" && computerChoice === "paper" || 
    playerChoice === "paper" && computerChoice === "scissors" ||
    playerChoice === "scissors" && computerChoice === "rock")
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

function capitalize(inputStr)
{
    return (inputStr.charAt(0).toUpperCase() + inputStr.substring(1).toLowerCase());
}

function validateInput(givenInput)
{
    givenInput = givenInput.toLowerCase();

    return choices.includes(givenInput);
}

function playRound(playerChoice)
{
    const computerChoice = getComputerChoice();
    let result = computeWinner(playerChoice, computerChoice);

    let output;

    switch (result)
    {
        case 0:
            output = `Round ${roundNumber}:\nA draw!`;
            break;
        case 1:
            output = `Round ${roundNumber}:\nYou win! ${capitalize(playerChoice)} beats ${computerChoice.toLowerCase()}.`;
            playerScore++;
            break;
        case -1:
            output = `Round ${roundNumber}:\nYou lose! ${capitalize(computerChoice)} beats ${playerChoice.toLowerCase()}.`;
            computerScore++;
            break;
    }

    roundNumber++;

    resultsDiv.textContent = output;
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5)
    {
        resultsDiv.textContent = "You win!";
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1;
    }
    else if (computerScore === 5)
    {
        resultsDiv.textContent = "You lose!";
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1;
    }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const resultsDiv = document.querySelector(".results");
const scoreDiv = document.querySelector(".score");

let playerScore = 0, computerScore = 0, roundNumber = 1;

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));