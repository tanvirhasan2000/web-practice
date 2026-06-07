'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Numbwer ! '
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=23;
// document.querySelector('.score').textContent=20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=25;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random()*20)+1;

let score=20;
let highScore=0;
console.log(secretnumber);
document.querySelector('.btn-check').addEventListener('click',game);
// Example of a correct function declaration (you can define its body as needed)
function losing() {
    if(score<=0){
        document.querySelector('.message').textContent="You Lost the game ";
    }
}
function game(){
    const guessedNumber = Number(document.querySelector('.guess').value);
    if (!guessedNumber) {
        document.querySelector('.message').textContent = 'No number !'; 
    }else if(guessedNumber === secretnumber){
        // when player wins 
        document.querySelector('.message').textContent= 'Correct Number';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secretnumber;
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }

    }else if(guessedNumber>secretnumber){
        document.querySelector('.message').textContent="too high";
        score--;
        document.querySelector('.score').textContent=score;
        losing();
    }else if(guessedNumber <secretnumber){
        document.querySelector('.message').textContent='Too Low';
        score--;
        document.querySelector('.score').textContent=score;
        losing();
    }
}
document.querySelector('.btn-again').addEventListener('click',resetgame);
function resetgame(){
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='Start Guessing.';
    document.querySelector('body').style.backgroundColor='#0a0000ff';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    secretnumber=Math.trunc(Math.random()*20)+1;
}
