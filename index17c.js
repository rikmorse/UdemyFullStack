document.query

function rollDice(dice1, dice2) {Selector(".img1").setAttribute("src", "./images/DICE/dice3.png");
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1);
    console.log(dice2);
    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (dice2 > dice1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
document.querySelector(".img2").setAttribute("src", "./images/DICE/dice4.png");Selector(".img2").setAttribute("src", "./images/DICE/dice4.png");Selector(".img1").setAttribute("src", "./images/DICE/dice3.png");Selector(".img2").setAttribute("src", "./images/DICE/dice4.png");
document.querySelector(".img1").setAttribute("src", "./images/DICE/dice3.png");Selector(".img2").setAttribute("src", "./images/DICE/dice4.png");
}