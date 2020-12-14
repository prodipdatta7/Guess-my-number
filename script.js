'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);;
let Highscore = 0;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.body.style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = null;
    document.querySelector('.message').textContent = "Start guessing...";
});

document.querySelector('.check').addEventListener('click', function () {
    if (score === 0) {
        document.querySelector('.message').textContent = "Please start the game Again!";
        document.querySelector('.message').style.color = 'red' ;
        return;
    }
    let guess = document.querySelector('.guess').value;
    if(guess < 1 || guess > 20){
        alert("Please guess a number between 1 and 20!") ;
    }
    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number!";
    }
    else {
        if (guess == secretNumber) {
            document.body.style.background = 'rgb(96, 179, 71)';
            document.querySelector('.number').style.width = '25rem';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.message').textContent = "🎉 Correct Numbner!";
            if (Highscore < score) {
                Highscore = score;
                document.querySelector('.highscore').textContent = Highscore;
            }
        }
        else {
            --score;
            document.querySelector('.score').textContent = score;
            if (score == 0) {
                document.querySelector('.message').textContent = "You lost the game!";
                document.querySelector('.message').style.color = 'red' ;
            }
            else {
                if (secretNumber < guess) {
                    document.querySelector('.message').textContent = "📈 Too High!";
                }
                else {
                    document.querySelector('.message').textContent = "📉 Too Low!";
                }
            }
        }
    }
});

// document.querySelector('.message').textContent = "" ;