let randomNumber1 = Math.floor(Math.random() * 5);
let randomNumber2 = Math.floor(Math.random() * 5);

let list = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];


document.querySelectorAll('img')[0].setAttribute('src',list[randomNumber1]);
document.querySelectorAll('img')[1].setAttribute('src',list[randomNumber2]);

function winner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = 'Player One Wins!'
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector('h1').innerHTML = 'Player two Wins!'
    }
    else if (randomNumber2 === randomNumber1) {
        document.querySelector('h1').innerHTML = 'Draw'
    }
}

winner()