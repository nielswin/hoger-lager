console.log('Main loaded');

//player and computer credits
let playerCredits = 5;
let computerCredits = 5;
 
 //get the html credit elements into javascript
function updatePlayerCredits(amount) {
    playerCredits += amount;
    document.getElementById("player-credits").textContent = playerCredits;
}
 
function updateComputerCredits(amount) {
    computerCredits += amount;
    document.getElementById("computer-credits").textContent = computerCredits;
}
 
// get the html elements into javascript
const dice = document.getElementById("dice-button");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
 
//code for the game, where math random picks a number between 1 and 6 and it shows the matching dice for the player and computer
function dicegame() {
    let randomDice = Math.floor((Math.random() * 6) + 1);
    let diceLocation = "/img/" + "dice" + randomDice + ".png";
    let firstImage = document.querySelectorAll("img")[0];
    firstImage.setAttribute("src", diceLocation);
 
    let randomDice2 = Math.floor((Math.random() * 6) + 1);
    let diceLocation2 = "/img/" + "dice" + randomDice2 + ".png";
    let secondImage = document.querySelectorAll("img")[1];
    secondImage.setAttribute("src", diceLocation2);
 
    //check if the dice is bigger then the other dice and show the matching text on the screen
    if (randomDice > randomDice2) {
        document.querySelector("h1").innerHTML = "You have won the round!";
        updatePlayerCredits(1);
        updateComputerCredits(-1);
    } else if (randomDice < randomDice2) {
        document.querySelector("h1").innerHTML = "The computer has won the round!";
        updatePlayerCredits(-1);
        updateComputerCredits(1);
    } else if (randomDice === randomDice2) {
        document.querySelector("h1").innerHTML = "Match Draw, nothing happens now";
    }
 
    //check if your credits reaches 0 and shows the matching alert and reloads the page to play again
    if (playerCredits === 0) {
        alert("You lost, better luck next time :)");
        loseSound.play();
        location.reload();
    }
 
    if (computerCredits === 0) {
        alert("you won, good game!");
        winSound.play();
        location.reload();
    }
}


