let choices = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

function playOneRound(playerChoice, computerChoice)
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

function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let playerSelection;
        while (true)
        {
            playerSelection = prompt("Make your pick: ");
            if (validateInput(playerSelection))
            {
                break;
            }
            else
            {
                console.log("Invalid input!");
            }
        }
        const computerSelection = getComputerChoice();

        switch (playOneRound(playerSelection, computerSelection))
        {
            case 0:
                console.log(`Round ${i + 1}:\nA draw!`);
                break;
            case 1:
                console.log(`Round ${i + 1}:\nYou win! ${capitalize(playerSelection)} beats ${computerSelection.toLowerCase()}.`);
                playerScore++;
                break;
            case -1:
                console.log(`Round ${i + 1}:\nYou lose! ${capitalize(computerSelection)} beats ${playerSelection.toLowerCase()}.`);
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

function validateInput(givenInput)
{
    givenInput = givenInput.toLowerCase();

    return choices.includes(givenInput);
}

game();