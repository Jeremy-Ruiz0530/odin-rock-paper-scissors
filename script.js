console.log("Connecting to script.js")
function getComputerChoice() {          // CPU's Random Choice
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {             // Player's Choice
    const choice = prompt("Enter rock, paper, or scissors:");
    return choice;
}

function playGame() {                   // Scores
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {           // Gameplay

        const human = humanChoice ? humanChoice.toLowerCase() : "";
        const computer = computerChoice.toLowerCase();

                            // If player wins the round
        if (human === computer) {
            console.log(`It's a tie! Both chose ${human}.`);
        } else if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper")
        ) {
            humanScore++;
            console.log(`You win this round! ${human} beats ${computer}.`);


                            // If CPU wins the round
        } else if (
            (computer === "rock" && human === "scissors") ||
            (computer === "paper" && human === "rock") ||
            (computer === "scissors" && human === "paper")
        ) {
            computerScore++;
            console.log(`You lose this round! ${computer} beats ${human}.`);
        } else {
            console.log("Invalid selection entered. No point awarded.");
        }
    }

    for (let round = 1; round <= 5; round++) {          // Round Display
        console.log(`\n--- Round ${round} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

                                                        // End Game
    console.log("\n=================");
    console.log("=== GAME OVER ===");
    console.log("=================");
    if (humanScore > computerScore) {
        console.log(`You won the game! Final Score: ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game! Final Score: ${computerScore} to ${humanScore}`);
    } else {
        console.log(`It's a draw! Final Score: ${humanScore} to ${computerScore}`);
    }
}

playGame();                                                // Starts the Game