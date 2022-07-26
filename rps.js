
// computer play that is randomly generated each time it is called
function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

// game start

function game() {
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = computerPlay();
            battleWinText.textContent = (playRound(playerSelection, computerSelection));
            playerWinText.textContent = "Player wins totals to " + playerWin;
            computerWinText.textContent = "Computer wins totals to " + computerWin;
            endGame();
        })
    })

        function playRound(playerSelection, computerSelection) {
            let tie = "It's a Tie! You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let paperBeatRock = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let scissorsBeatPaperLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let paperBeatRockLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let rockBeatScissors = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let rockBeatScissorsLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let scissorsBeatPaper = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
        
            if (playerSelection === computerSelection) {
                return tie;
            } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
                playerWin++;
                return paperBeatRock;
            } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
                computerWin++;
                return scissorsBeatPaperLoss;
            } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
                computerWin++;
                return paperBeatRockLoss;
            } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
                playerWin++;
                return rockBeatScissors;
            } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
                computerWin++;
                return rockBeatScissorsLoss;
            } else {
                playerWin++;
                return scissorsBeatPaper;
            }
        }

        const container = document.querySelector("#container");
        const resultsDiv = document.createElement("div");
        resultsDiv.style.marginTop = "20px";
        container.appendChild(resultsDiv);

        const playerWinText = document.createElement("p");
        playerWinText.style.color = "blue";
        playerWinText.textContent = "Player wins totals to " + playerWin;
        resultsDiv.appendChild(playerWinText);

        const computerWinText = document.createElement("p");
        computerWinText.style.color = "blue";
        computerWinText.textContent = "Computer Win totals: " + computerWin;
        resultsDiv.appendChild(computerWinText);

        const battleWinText = document.createElement("p");
        battleWinText.style.color = "black";
        resultsDiv.appendChild(battleWinText);

        const gameWinText = document.createElement("p");
        gameWinText.style.color = "orange";
        gameWinText.textContent = gameWinner;
        resultsDiv.appendChild(gameWinText); 
        
        function endGame() {
            if (playerWin == 5) {
                gameWinner = "YOU WIN!";
                gameWinText.textContent = gameWinner;

            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            playAgainButton.addEventListener('click', () => {
                location.reload();
                })
        } else if (computerWin == 5) {
            gameWinner = "COMPUTER WINS!";
            gameWinText.textContent = gameWinner;

            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);
            
            //  if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
                })
        }   
    }
}
    

game();
