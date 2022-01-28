"use stirct";
let score = 20;
let highScore = 0;
let secratNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage =(message) =>{
    document.querySelector(".message").textContent = message;
}
let displayScore =(scores)=>{
    document.querySelector(".score").textContent = scores;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if (!guess) {
        displayMessage("No number!");
        //when guess is equal to he number
    } else if (guess === secratNumber) {
        displayMessage("Correct Number!");
        document.querySelector('.number').textContent = secratNumber;
        displayScore = (score);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secratNumber) {
        if (score > 1) {
            displayMessage(guess > secratNumber ? "Too High!" : "Too low!");
            score--;
            displayScore(score);
        } else {
            displayMessage("You lost the game!");
            displayScore(0);
        }
    }
    /*       // when guess is too high
       }else if (guess > secratNumber) {
           if (score > 1) {
               document.querySelector(".message").textContent = "Too high";
               score--;
               document.querySelector(".score").textContent = score;
           } else {
               document.querySelector(".message").textContent = "You lost the game!";
               document.querySelector(".score").textContent = 0;
           }
           // when guess is too low
       } else if (guess < secratNumber) {
           if (score > 1) {
               document.querySelector(".message").textContent = "Too low";
               score--;
               document.querySelector(".score").textContent = score;
           } else {
               document.querySelector(".message").textContent = "You lost the game!";
               document.querySelector(".score").textContent = 0;
           }
       }*/
});
const newGame = () => {
    score = 20;
    secratNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}
document.querySelector('.again').addEventListener('click', newGame)


