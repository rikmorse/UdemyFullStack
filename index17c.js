
/* function rollDice(dice1, dice2) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1);
    console.log(dice2);
    document.querySelector(".img1").setAttribute("src", "./images/DICE/dice" + dice1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/DICE/dice" + dice2 + ".png");
    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (dice2 > dice1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw! Try again!!!";
    }   
    return [dice1, dice2];
}
rollDice(); */


/* Solution Instructor version */
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6.
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "./images/DICE/" + randomDiceImage; // images/dice1.png - images/dice6.png
image1.setAttribute("src", randomImageSource);

/* var randomNumber2 = Math.floor(Math.random() * 6) + 1; */ // random number between 1 and 6.
/* var randomImageSource2 = "./images/DICE/dice" + randomNumber2 + ".png"; */ // images/dice1.png - images/dice6.png
/* document.querySelectorAll("img").setAttribute("src", randomImageSource2); */

// If player 1 wins
/* if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";   
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";   
} else {
    document.querySelector("h1").innerHTML = "It's a Draw! Try again!!!";    
}
    */