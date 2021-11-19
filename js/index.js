const pickUserHand = (eventt) => {

    //This also works for changing pic
    //document.querySelector("#userPickImage").src = eventt.target.src;
    let userSelection = eventt.target.alt;
    document.querySelector("#userPickImage").src = handOptions[eventt.target.alt];
    //im using the alt of the image to identify image

    //hide current section

    hands.style.display = "none";
    contest.style.display = "flex";
    // console.log(eventt.target.alt);
    pickComputerHand(userSelection);

}

const pickComputerHand = (userSelection) => {
    let hands = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random() * 3);
    let cpSelection = hands[randNum];
    document.querySelector("#computerPickImage").src = handOptions[cpSelection];

    checker(cpSelection, userSelection);
}

const checker = (cpSelection, userSelection) => {

    if (userSelection == "paper" && cpSelection == "scissors") {
        setDecision("YOU LOSE!");
    }
    if (userSelection == "paper" && cpSelection == "rock") {
        setDecision("YOU WIN!");
        setScore(score + 1);
    }
    if (userSelection == "paper" && cpSelection == "paper") {
        setDecision("It's a tie!");
    }
    if (userSelection == "rock" && cpSelection == "scissors") {
        setDecision("YOU WIN!");
        setScore(score + 1);
    }
    if (userSelection == "rock" && cpSelection == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userSelection == "rock" && cpSelection == "rock") {
        setDecision("It's a tie!");
    }
    if (userSelection == "scissors" && cpSelection == "scissors") {
        setDecision("It's a tie!");
    }
    if (userSelection == "scissors" && cpSelection == "rock") {
        setDecision("YOU LOSE!");
    }
    if (userSelection == "scissors" && cpSelection == "paper") {
        setDecision("YOU WIN!");
        setScore(score + 1);
    }

}

const setDecision = (decision) => {

    result.innerText = decision;

}
const setScore = (scorepassed) => {
    score = scorepassed;
    scoreNum.innerText = score;

}


const restartGame = () => {

    hands.style.display = "flex";
    contest.style.display = "none";
}


let score = 0;
const scoreNum = document.querySelector('.score h1');
const result = document.querySelector('.decision h1');
const hands = document.querySelector(".hands");
const contest = document.querySelector(".contest");
const handsChildren = hands.children;
const button = document.querySelector('.newGame');
const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
};

button.addEventListener('click', restartGame);
for (var i = 0; i < handsChildren.length; i++) {

    handsChildren[i].addEventListener("click", pickUserHand);

}