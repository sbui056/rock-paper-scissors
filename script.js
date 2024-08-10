console.log("Rock, Paper, Scissors! Best out of 5");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    const dice = Math.random();
    if (dice <= 0.33)
        return "rock";
    else if (dice <= 0.66)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice()
{
    let choice = prompt("Enter your move (rock, paper, or scissors?): ");
    return choice;
}

function playRound(humanChoice, computerChoice)
{
    const human = humanChoice.toLowerCase();
    if (human == computerChoice)
    {
        console.log("It's a tie!");
    }
    else if ((human === "rock" && computerChoice === "scissors") ||
             (human === "paper" && computerChoice === "rock") ||
             (human === "scissors" && computerChoice === "paper"))
    {
        console.log(`You win the round! ${human} beats ${computerChoice}`);
        humanScore++;
    }
    else if ((computerChoice === "rock" && human === "scissors") ||
             (computerChoice === "paper" && human === "rock") ||
             (computerChoice === "scissors" && human === "paper"))
    {
        console.log(`Computer wins the round! ${computerChoice} beats ${human}`);
        computerScore++;
    }
}

function playGame()
{
    for (let i = 0; i < 5; ++i)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore)
    {
        console.log("You win!")
    }
    else if (humanScore > computerScore)
    {
        console.log("You lose.")
    }
    else
    {
        console.log("Tie.")
    }
}

playGame();
