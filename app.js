let userScore = 0;
let comScore = 0;

let userCount = document.querySelector("#user-score");
let compCount = document.querySelector("#com-score"); 
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    
}
const drawGame = () => {
    msg.innerText = "Game Draw!"
    console.log("Game was Draw")
}
const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText = "You Win!";
        userScore++;
        userCount.innerText = userScore;
    } else {
        console.log("You loose")
        msg.innerText = "Computer Win!"
        comScore++;
        compCount.innerText = comScore;
    }
}
const playGame = (userChoice) => {
    console.log("User choice is:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is:",compChoice);

    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false: true; 
        } else {
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})