var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice() {
    var choices = ["r" , "p" , "s"];
    var randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}




function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

game();

function main() {
rock_div.addEventListener("click", function () {
    game("r");
}
)

paper_div.addEventListener("click",function () {
    game("p");
}
)

scissors_div.addEventListener("click", function () {
    game("s");
}
)
}
main();


// functions

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + " computer choice. " + "You Win!"
}
function lose() {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}
function draw() {
    console.log("draw");
}
