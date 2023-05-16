let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

function playOneRound(playerChoice, computerChoice)
{
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    
    if (computerChoice === playerChoice)
    {
        return "It's a Tie!";
    }

    if (playerChoice === "rock")
    {
        if (computerChoice === "paper")
        {
            return "You Lose! Paper beats Rock";
        }
        else
        {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerChoice === "paper")
    {
        if (computerChoice === "scissors")
        {
            return "You Lose! Scissors beats Paper";
        }
        else
        {
            return "You Win! Paper beats Rock";
        }
    }
    else if (playerChoice === "scissors")
    {
        if (computerChoice === "rock")
        {
            return "You Lose! Rock beats Scissors";
        }
        else
        {
            return "You Win! Scissors beats Paper";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playOneRound(playerSelection, computerSelection));