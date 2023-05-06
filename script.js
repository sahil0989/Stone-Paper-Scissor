/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let totalScore = 0;

// ** getComputerChoice randomly selects between`rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    let choices = ["stone", "paper", "scissors"];
    let a = Math.floor(Math.random() * 3);
    return choices[a];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    let res;

    // All situations where human draws, set `score` to 0
    if (playerChoice == computerChoice) {
        res = 0;
    }

    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    else if (playerChoice == "paper" && computerChoice == "stone") {
        res = 1;
    } else if (playerChoice == "stone" && computerChoice == "scissors") {
        res = 1;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        res = 1;
    }

    // Otherwise human loses (aka set score to -1)
    else {
        res = -1;
    }

    // return score
    return res;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    if (score == 0) {
        result.innerHTML = "It's Tie !!";
    } else if (score == 1) {
        result.innerHTML = "You Won !!";
    } else {
        result.innerHTML = "You Loose !!";
    }

    totalScore += score;

    player_score.innerHTML = `Your Score : ${totalScore}`;

    hands.innerHTML = `👦 ${playerChoice} VS 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    let computerChoice = getComputerChoice();
    let score = getResult(playerChoice, computerChoice);

    showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons

    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    const player_score = document.getElementById("player_score");
    const hands = document.getElementById("hands");
    const result = document.getElementById("result");

    const userChoice = document.querySelectorAll(".rpsButton");

    userChoice.forEach((choices) => {
        choices.onclick = () => onClickRPS(choices.value);
    });
    // Add a click listener to the end game button that runs the endGame() function on click
    const resetbtn = document.getElementById("endGameButton");
    resetbtn.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    totalScore = 0;
    const player_score = document.getElementById("player_score");
    const hands = document.getElementById("hands");
    const result2 = document.getElementById("result");

    hands.innerText = "";
    player_score.innerText = "";
    result2.innerText = "";
}

playGame();
