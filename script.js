'use strict';

// document.querySelector('.message').textContent = "Hello";
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 18;
// document.querySelector('.guess').value = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = "No Number entered";
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Guess";
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '30rem'; 
        document.querySelector('.number').textContent = secretNumber;
        if (scoreValue > highScore) {
            highScore = scoreValue;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess > secretNumber) {
        if (scoreValue > 1) {
            document.querySelector('.message').textContent = "Too high guess";
            scoreValue = scoreValue - 1;
            document.querySelector('.score').textContent = scoreValue;
        } else {
            document.querySelector('.message').textContent = "You Lost";
            document.querySelector('body').style.backgroundColor = "red";
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (guess < secretNumber) {
        if (scoreValue > 1) {
            document.querySelector('.message').textContent = "Too low guess";
            scoreValue = scoreValue - 1;
            document.querySelector('.score').textContent = scoreValue;
        }  else {
            document.querySelector('.message').textContent = "You Lost";
            document.querySelector('body').style.backgroundColor = "red";
            document.querySelector('.score').textContent = 0;
        }
       
    } 
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    scoreValue = 20;
    document.querySelector('.message').textContent = "Start Guessing";
    document.querySelector('.score').textContent = scoreValue;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";


});
