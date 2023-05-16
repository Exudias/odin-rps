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
        return 0;
    }

    if (playerChoice === "rock")
    {
        if (computerChoice === "paper")
        {
            return -1;
        }
        else
        {
            return 1;
        }
    }
    else if (playerChoice === "paper")
    {
        if (computerChoice === "scissors")
        {
            return -1;
        }
        else
        {
            return 1;
        }
    }
    else if (playerChoice === "scissors")
    {
        if (computerChoice === "rock")
        {
            return -1;
        }
        else
        {
            return 1;
        }
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Make your pick: ");
        const computerSelection = getComputerChoice();

        switch (playOneRound(playerSelection, computerSelection))
        {
            case 0:
                console.log("A draw!");
                break;
            case 1:
                console.log(`You win! ${capitalize(playerSelection)} beats ${computerSelection.toLowerCase()}`);
                playerScore++;
                break;
            case -1:
                console.log(`You lose! ${capitalize(computerSelection)} beats ${playerSelection.toLowerCase()}`);
                computerScore++;
                break;
        }
    }

    let flavorText = "";

    if (playerScore > computerScore)
    {
        flavorText = "You win!";
    }
    else if (playerScore === computerScore)
    {
        flavorText = "It's a tie!";
    }
    else
    {
        flavorText = "You lose!";
    }

    console.log(flavorText + ` \nThe score was ${playerScore} : ${computerScore}`);
}

function capitalize(inputStr)
{
    return (inputStr.charAt(0).toUpperCase() + inputStr.substring(1).toLowerCase());
}

game();