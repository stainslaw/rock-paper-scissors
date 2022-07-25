
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

function game () {
    let roundPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";


    while (roundPlayed < 5) {
        roundPlayed++;
        const computerSelection = computerPlay();
        playerSelection = prompt("Please type in your selection (Rock, Paper or Scissors)!")
        console.log(playRound(capitalise(playerSelection), computerSelection)); 
        console.log("Player wins totals to " + playerWin);
        console.log("Computer wins totals to " + computerWin)

        function playRound (firstLetterCap, computerSelection) {
            let tie = "It's a Tie! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let paperBeatRock = "You win! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let scissorsBeatPaperLoss = "You lose! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let paperBeatRockLoss = "You win! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let rockBeatScissors = "You win! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let rockbeatScissorsLoss = "You lose! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let scissorsBEatPaper = "You win! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
        
            if (firstLetterCap === computerSelection) {
            return tie;
            } else if ((firstLetterCap === "Paper") && (computerSelection === "Rock")) {
                playerWin++;
                return paperBeatRock;
            } else if ((firstLetterCap === "Paper") && (computerSelection === "Scissors")) {
                computerWin++;
                return scissorsBeatPaperLoss;
            } else if ((firstLetterCap === "Rock") && (computerSelection === "Paper")) {
                computerWin++;
                return paperBeatRockLoss;
            } else if ((firstLetterCap === "Rock") && (computerSelection === "Scissors")) {
                playerWin++;
                return paperBeatRock;
            } else if ((firstLetterCap === "Scissors") && (computerSelection === "Rock")) {
                computerWin++
                return paperBeatRockLoss;
            } else {
                playerWin++;
                return scissorsBeatPaper;
            }
        
    }
} 

    if (playerWin > computerWin) {
        gameWinner = "YOU WIN!";
    } else if (playerWin === computerWin) {
        gameWinner = "NO ONE, IT'S A TIE!";
    } else {
        gameWinner = "THE COMPUTER WINS!";
    }

    console.log(gameWinner);

}

    function capitalise(playerSelection) {
        let allowLowerCase = playerSelection.toLowerCase();
        let firstLetterCap = allowLowerCase.charAt(0).toUpperCase() + allowLowerCase.slice(1);
        return firstLetterCap;
    }

    game();
