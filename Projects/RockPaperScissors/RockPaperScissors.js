
var RPS = function() {
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} confirm("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        confirm("The result is a tie!");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            confirm("rock wins");
        }
        else {
            confirm("paper wins");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            confirm("paper wins");
        }
        else {
            confirm("scissors wins");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            confirm("rock wins");
        }
        else {
            confirm("scissors wins");
        }
    }
};
compare(userChoice, computerChoice);
}
